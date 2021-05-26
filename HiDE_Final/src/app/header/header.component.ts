import { DashboardService } from './../dashboard/dashboard.service';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';
import { NotificationInvite } from './notificationinvite.model';
import { CommonService } from './../common.service';
import { AuthService } from './../authentication/auth.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NotifyService } from '../notify.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('userDropDown') userDropDown: ElementRef;
  @ViewChild('mainHeader') mainHeader: ElementRef;
  @ViewChild('headerToggle') headerToggle: ElementRef;
  @ViewChild('notificationsReference') notificationsReference: ElementRef;

  isDropDownOpened = false;
  isNotificationsOpened = false;
  timeoutID: NodeJS.Timer;

  headerStatusFlag = true;
  headerToggleFlag = false;
  headerOpacityFlag = false;

  notifications = [];

  constructor(
    private authService: AuthService,
    private commonService: CommonService,
    private notificationService: NotificationService,
    private router: Router,
    private dashboardService: DashboardService,
    private notifyService: NotifyService) {

      console.log('HeaderComponent: constructor');
      this.notificationService.getNotifications$.subscribe( (notifications) => {
        console.log('HeaderComponent: notifications received');
        this.notifications = [];
        if (notifications) {
          for (const notification of notifications) {
            switch (notification.type) {
              case 'invite': {
                this.notifications.push(new NotificationInvite(
                  notification.from,
                  notification.message,
                  notification.inviteLink,
                  notification.status,
                  notification.projectid
                ));
                break;
              }
              default: {
                break;
              }
            }
          }
        }
      });

      this.notificationService.getInviteNotification$.subscribe( (inviteNotification) => {
        if (inviteNotification) {
          this.notifications.push(inviteNotification);
        }
      });
    }

  ngOnInit() {
    this.commonService.headerStatus$.subscribe( (statuses) => {
      console.log('HeaderComponent: Got new config');
      console.log(statuses);
      this.headerStatusFlag = statuses[0];
      this.headerToggleFlag = statuses[1];
      this.headerOpacityFlag = statuses[2];

      if (this.headerStatusFlag) {
        this.mainHeader.nativeElement.style.top = '100%';
      } else {
        this.mainHeader.nativeElement.style.top = '0';
      }

      if (this.headerToggleFlag) {
        this.headerToggle.nativeElement.style.display = 'block';
        if (this.headerStatusFlag) {
          this.mainHeader.nativeElement.style.boxShadow = '0 0 10px .5px';
        }
        this.mainHeader.nativeElement.style.boxShadow = '0 0 0 0';
      } else {
        this.headerToggle.nativeElement.style.display = 'none';
        this.mainHeader.nativeElement.style.boxShadow = '0 0 0 0';
      }
    });
  }

  mouseLeaveDropDown() {
    this.timeoutID = setTimeout( () => {
      if (this.isDropDownOpened) {
        this.isDropDownOpened = false;
        this.userDropDown.nativeElement.style.right = '-15vh';
        this.userDropDown.nativeElement.style.opacity = '0';
        this.userDropDown.nativeElement.style.pointerEvents = 'none';
      }
    }, 1000);
  }

  catchedMouse() {
    if (this.timeoutID) {
      clearTimeout(this.timeoutID);
    }
  }

  dropdown(action: string) {
    if (action === 'open' && !this.isDropDownOpened) {
      this.isDropDownOpened = true;
      this.userDropDown.nativeElement.style.right = '4.5vh';
      this.userDropDown.nativeElement.style.opacity = '1';
      this.userDropDown.nativeElement.style.pointerEvents = 'all';
    } else if (action === 'close' && this.isDropDownOpened) {
      this.isDropDownOpened = false;
      this.userDropDown.nativeElement.style.right = '-15vh';
      this.userDropDown.nativeElement.style.opacity = '0';
      this.userDropDown.nativeElement.style.pointerEvents = 'none';
    }
  }

  onLogout() {
    this.authService.logout();
  }

  authStatus() {
    return this.authService.isAuthenticated();
  }

  onHeaderToggle() {
    if (this.headerStatusFlag) {
      this.headerStatusFlag = false;
      this.mainHeader.nativeElement.style.top = '0';
      this.mainHeader.nativeElement.style.boxShadow = '0 0 0 0';
    } else {
      this.headerStatusFlag = true;
      this.mainHeader.nativeElement.style.top = '100%';
      this.mainHeader.nativeElement.style.boxShadow = '0 0 10px .5px';
    }
  }

  onNotificationsToggle() {
    if (this.isNotificationsOpened) {
      this.isNotificationsOpened = false;
      this.notificationsReference.nativeElement.style.pointerEvents = 'none';
      this.notificationsReference.nativeElement.style.opacity = '0';
    } else {
      this.isNotificationsOpened = true;
      this.notificationsReference.nativeElement.style.pointerEvents = 'all';
      this.notificationsReference.nativeElement.style.opacity = '.8';
    }
  }

  getNotificationType(notification: any) {
    if (notification instanceof NotificationInvite) {
      return 'invite';
    }
  }

  noOfUnreadNotifications() {
    let noOfUnread = 0;
    for (const notificate of this.notifications) {
      if (notificate.status === 'unread') {
        noOfUnread += 1;
      }
    }
    return (noOfUnread <= 0) ? '' : noOfUnread;
  }

  onAcceptInvite(inviteLink: string, projectid: string) {
    // show local loading
    this.notificationService.acceptInvitation$.subscribe( (message) => {
      if (this.router.url === '/dashboard') {
        // update projectslist
        this.dashboardService.getProjectList();
      }
      console.log(message);
      this.notifyService.notify(message.split('-')[1]);
      // remove local loading
    });
    this.notificationService.acceptInvite(inviteLink, projectid, this.authService.currentUsername);
  }

  onLogoClick() {
    this.commonService.headerVisibility(false, false, false);
    this.router.navigate(['/']);
  }
}
