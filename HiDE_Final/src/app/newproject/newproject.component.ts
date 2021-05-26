import { Router } from '@angular/router';
import { AuthService } from './../authentication/auth.service';
import { LoadingService } from './../loading.service';
import { NewprojectService } from './newproject.service';
import { MemberItem } from './memberitem.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonService } from '../common.service';
import { NotifyService } from '../notify.service';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {

  searchedMembers: MemberItem[] = null;
  selectedMembers: MemberItem[] = [];

  @ViewChild('searchText') searchText: ElementRef;
  @ViewChild('projectTitle') projectTitle: ElementRef;
  @ViewChild('projectDescription') projectDescription: ElementRef;
  @ViewChild('deadlineDate') deadlineDate: ElementRef;

  constructor(
    private newprojectService: NewprojectService,
    private loadingService: LoadingService,
    private notifyService: NotifyService,
    private authService: AuthService,
    private router: Router) {

      this.newprojectService.seacrhMemberStatus$.subscribe( (members) => {
        if (members) {
          this.searchedMembers = [];
          this.searchedMembers = members;
        } else {
          // some error happened
        }
        // remove loading
      });
     }

  ngOnInit() {

  }

  search(key) {
    if (key === 13) {
      // show loading
      this.newprojectService.searchMembers(this.searchText.nativeElement.value);
    }
  }

  memberAdded(member: MemberItem) {
    if (this.selectedMembers.indexOf(member) === -1) {
      this.selectedMembers.push(member);
    }
  }

  memberRemoved(member: MemberItem) {
    this.selectedMembers.splice(this.selectedMembers.indexOf(member), 1);
  }

  projectCreate() {
    this.loadingService.showLoadingWithMessage('Creating Project with Environment...');
    this.newprojectService.projectCreationStatus$.subscribe( (status) => {
      this.loadingService.removeLoading();
      if (status) {
        this.notifyService.notify('Project Created Successfully');
        // navigate to dashboard
        this.router.navigate(['/dashboard']);
      } else {
        this.notifyService.notify('Project Creation Failed');
      }
    });
    const members = [];
    for (const currentMember of this.selectedMembers) {
      members.push(currentMember.username);
    }
    this.newprojectService.createProject(
      this.getFormattedDate(this.deadlineDate.nativeElement.value),
      this.projectDescription.nativeElement.value,
      this.authService.currentUsername,
      members,
      this.getFormattedDate((new Date()).toISOString().split('T')[0]),
      'active',
      this.projectTitle.nativeElement.value);
  }

  projectReset() {
    this.searchedMembers = null;
    this.selectedMembers = [];
    this.searchText.nativeElement.value = '';
    this.projectTitle.nativeElement.value = '';
    this.projectDescription.nativeElement.value = '';
  }

  getFormattedDate(date: string) {
    const parts = date.split('-');
    switch (parts[1]) {
      case '01': {
        return (parts[2] + ' ' + 'JAN' + ' ' + parts[0]);
      }
      case '02': {
        return (parts[2] + ' ' + 'FEB' + ' ' + parts[0]);
      }
      case '03': {
        return (parts[2] + ' ' + 'MAR' + ' ' + parts[0]);
      }
      case '04': {
        return (parts[2] + ' ' + 'APR' + ' ' + parts[0]);
      }
      case '05': {
        return (parts[2] + ' ' + 'MAY' + ' ' + parts[0]);
      }
      case '06': {
        return (parts[2] + ' ' + 'JUN' + ' ' + parts[0]);
      }
      case '07': {
        return (parts[2] + ' ' + 'JUL' + ' ' + parts[0]);
      }
      case '08': {
        return (parts[2] + ' ' + 'AUG' + ' ' + parts[0]);
      }
      case '09': {
        return (parts[2] + ' ' + 'SEP' + ' ' + parts[0]);
      }
      case '10': {
        return (parts[2] + ' ' + 'OCT' + ' ' + parts[0]);
      }
      case '11': {
        return (parts[2] + ' ' + 'NOV' + ' ' + parts[0]);
      }
      case '12': {
        return (parts[2] + ' ' + 'DEC' + ' ' + parts[0]);
      }
      default: break;
    }
  }

  checkImgUrl(imgUrl: string) {
    if (imgUrl === '') {
      return '../../assets/images/defaultAvatar.png';
    }
    return imgUrl;
  }
}
