import { NotifyService } from './../notify.service';
import { Subject } from 'rxjs';
import { AuthService } from './../authentication/auth.service';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Profile } from './profile.model';

@Injectable()
export class ProfileService {

  constructor(private authService: AuthService, private notifyService: NotifyService) { }

  private profileGetStatus = new Subject<Profile>();
  profileGetStatus$ = this.profileGetStatus.asObservable();

  private profileUpdateStatus = new Subject<boolean>();
  profileUpdateStatus$ = this.profileUpdateStatus.asObservable();

  profile: Profile = new Profile(null, null);
  getpromises = [];
  setPromises = [];

  getProfile() {
    // populate profile from database
    this.getpromises.push(
      firebase.storage().ref(this.authService.currentUser.uid + '/profile.jpg').getDownloadURL()
        .then( (url) => {
          this.profile.profilePicUrl = url;
        })
        .catch( (error) => {
          console.log(error);
          // profilepic doesn't exist
          this.profile.profilePicUrl = null;
        }));
    this.getpromises.push(
      firebase.database().ref('userdata/' + this.authService.currentUser.uid).child('description')
        .once('value', (snapshot) => {
          this.profile.description = snapshot.val();
        })
        .catch( (error) => {
          console.log(error);
          this.profile.description = null;
        }));
    Promise.all(this.getpromises)
      .then( () => {
        this.profileGetStatus.next(this.profile);
      })
      .catch( (error) => {
        console.log(error);
        this.profileGetStatus.next(this.profile);
      });
  }

  setProfile(profilePic: File, description: string) {
    // populate database from profile
    this.setPromises.push(
      firebase.database().ref('userdata/' + this.authService.currentUser.uid)
        .set(
          {
            description: description,
            username: this.authService.currentUsername
          }
        )
        .then()
        .catch( (error) => {
          console.log(error);
        })
    );
    if (profilePic) {
      this.setPromises.push(
        firebase.storage().ref(this.authService.currentUser.uid + '/profile.jpg')
          .put(profilePic)
          .then()
          .catch( (error) => {
            console.log(error);
          })
      );
    }
    Promise.all(this.setPromises)
      .then( () => {
        this.profileUpdateStatus.next(true);
      })
      .catch( (error) => {
        console.log(error);
        this.profileUpdateStatus.next(false);
      });
  }

  resetPassword() {
    if (this.authService.isAuthenticated()) {
      firebase.auth().sendPasswordResetEmail(this.authService.currentUser.email)
        .then( () => {
          this.notifyService.notify('Password Reset Mail Sent');
        })
        .catch();
    }
  }
}
