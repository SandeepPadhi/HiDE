import { HttpClient } from '@angular/common/http';
import { AuthService } from './../authentication/auth.service';
import { NotificationInvite } from './notificationinvite.model';
import { SocketService } from './../socket.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  getInviteNotification = new Subject<NotificationInvite>();
  getInviteNotification$ = this.getInviteNotification.asObservable();

  getNotifications = new Subject<any[]>();
  getNotifications$ = this.getNotifications.asObservable();

  acceptInvitation = new Subject<string>();
  acceptInvitation$ = this.acceptInvitation.asObservable();

  constructor(
    private socketService: SocketService,
    private authService: AuthService,
    private http: HttpClient) {

      console.log('NotificationService: constructor');

      this.authService.authStatus$.subscribe( (status) => {
        if (status) {
          this.getStoredNotifications();
        }
      });

      this.socketService.getInviteNotification$.subscribe( (inviteNotification) => {
        this.getInviteNotification.next(inviteNotification);
      });
  }

  getStoredNotifications() {
    console.log('NotificationService: getting notifications');
    if (this.authService.isAuthenticated()) {
      console.log('NotificationService: authenticated');
      firebase.database().ref('userdata/' + this.authService.currentUser.uid + '/notifications').once('value', (snapshot) => {
        if (snapshot.val()) {
          this.getNotifications.next(snapshot.val());
          return;
        }
        this.getNotifications.next(null);
      });
    }
  }

  acceptInvite(inviteLink: string, projectid: string, username: string) {
    this.http.post<{ message: string }>('/api/acceptinvite',
    {
      inviteLink: inviteLink,
      projectid: projectid,
      username: username
    })
      .subscribe( (response) => {
        this.acceptInvitation.next(response.message);
      },
      (error) => {
        console.log(error);
        this.acceptInvitation.next('false');
      });
  }
}
