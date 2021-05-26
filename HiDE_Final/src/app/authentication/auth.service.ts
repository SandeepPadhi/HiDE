import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {

  db: firebase.database.Database;
  usersTable: firebase.database.Reference;
  currentUser: firebase.User;
  accessToken: string;
  currentUsername: string;

  private registrationStatus = new Subject<string>();
  registrationStatus$ = this.registrationStatus.asObservable();

  private signinStatus = new Subject<string>();
  signinStatus$ = this.signinStatus.asObservable();

  private authStatus = new Subject<boolean>();
  authStatus$ = this.authStatus.asObservable();

  private currentUsernameStatus = new Subject<string>();
  currentUsernameStatus$ = this.currentUsernameStatus.asObservable();

  constructor(private router: Router) {
    console.log('AuthService: constructor');
    this.db = firebase.database();
    this.usersTable = this.db.ref().child('users');

    firebase.auth().onAuthStateChanged( (authData) => {
      console.log('AuthService: onAuthStateChanged');
      if (authData && authData.emailVerified) {
        console.log('AuthService: Already logged in');
        this.currentUser = authData;
        console.log('AuthService: Querying Token');
        this.currentUser.getIdToken()
          .then( (token) => {
            console.log('AuthService: got token');
            this.accessToken = token;
            console.log('AuthService: published true');
            this.authStatus.next(true);
          })
          .catch( (error) => {
            console.log(error);
            this.authStatus.next(false);
          });
        console.log('AuthService: Querying Username');
        this.db.ref('users').on('value', (snapshot) => {
          console.log('AuthService: got username');
          this.currentUsername = Object.keys(snapshot.val()).find(key => snapshot.val()[key] === this.currentUser.email);
          this.currentUsernameStatus.next(this.currentUsername);
        });
      } else {
        this.authStatus.next(false);
      }
    });
  }

  registerUser(username: string, email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( (userCredential: firebase.auth.UserCredential) => {
        this.usersTable.update( { [username]: email } )
          .then( (response) => {
            firebase.database().ref('userdata/' + userCredential.user.uid)
              .set({
                description: 'No Description',
                username: username
              })
              .then( () => {
                firebase.database().ref('uids').update({ [username]: userCredential.user.uid });
              });
          })
          .catch( (error) => {
            console.log(error);
          });

        console.log(userCredential.user.uid);
        // send verification mail
        this.currentUser = firebase.auth().currentUser;
        this.currentUser.sendEmailVerification().then( () => {
          // Email sent
          console.log('mail sent');
          // inform register component that mail has sent
          this.registrationStatus.next('true');
        })
        .catch( (error) => {
          // cannot send verification mail
          this.registrationStatus.next('false-Cannot send verification mail');
          console.log(error);
        });
      })
      .catch( (error) => {
        // cannot sign up new user
        this.registrationStatus.next('false-Cannot signup new user');
        console.log(error);
      });
  }

  signinUser(username: string, password: string) {
    // check username in users structure
    this.db.ref('users').child(username).once('value', (snapshot) => {
      const email = snapshot.val();
      if (email != null) {
        // check if user is verified
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then( (response) => {
            if (response) {
               if (firebase.auth().currentUser.emailVerified) {
                this.currentUser = firebase.auth().currentUser;
                firebase.auth().currentUser.getIdToken()
                .then( (token) => {
                  this.accessToken = token;
                });
                this.db.ref('users').on('value', (snap) => {
                  this.currentUsername = Object.keys(snap.val()).find(key => snap.val()[key] === this.currentUser.email);
                });
                // redirect to dashboard
                firebase.auth().setPersistence('local');
                this.router.navigate(['/dashboard']);
              } else {
                this.signinStatus.next('Email not verified, Check your mail for verification');
                this.currentUser = null;
                this.accessToken = null;
              }
            }
          })
          .catch( (error) => {
            this.signinStatus.next('Username or Password Incorrect');
            console.log(error);
        });
      } else {
        // user doesn't exist
        this.signinStatus.next('User Doesn\'t Exist');
      }
    });
  }

  getToken() {
    this.currentUser.getIdToken()
      .then( (token: string) => {
        this.accessToken = token;
      })
      .catch( (error) => {
        console.log(error);
      });
    return this.accessToken;
  }

  isAuthenticated() {
    return this.accessToken != null;
  }

  logout() {
    console.log('AuthService: logout');
    firebase.auth().signOut();
    this.accessToken = null;
    this.currentUser = null;
    this.router.navigate(['/']);
    this.currentUsername = null;
    console.log('AuthService: cleared all variables');
  }
}
