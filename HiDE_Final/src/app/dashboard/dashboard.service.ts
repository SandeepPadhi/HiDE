import { SocketService } from './../socket.service';
import { AnnounceItem } from './announcements/announceitem.model';
import { ProjectListItem } from './projectlist/projectlistitem.model';
import { AuthService } from './../authentication/auth.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { NotificationService } from '../header/notification.service';

@Injectable()
export class DashboardService {

  private getProjects = new Subject<ProjectListItem[]>();
  getProjects$ = this.getProjects.asObservable();

  private getAnnouncements = new Subject<AnnounceItem[]>();
  getAnnouncements$ = this.getAnnouncements.asObservable();

  private getNewAnnouncement = new Subject<AnnounceItem>();
  getNewAnnouncement$ = this.getNewAnnouncement.asObservable();

  projectIdList = null;
  projectList: ProjectListItem[] = null;
  announcements: AnnounceItem[] = null;

  constructor(
    private authService: AuthService,
    private socketService: SocketService) {

    console.log('DashboardService: constructor');
    if (this.authService.currentUsername && this.authService.isAuthenticated()) {
      console.log('DashboardService: already authenticated');
      console.log('DashboardService: emitting token');
      this.socketService.announceUser(this.authService.currentUsername, this.authService.accessToken);
    } else {
      console.log('DashboardService: not already authenticated');
      console.log('DashboardService: subscribing to currentusername subject');
      this.authService.currentUsernameStatus$.subscribe( (status) => {
        console.log('DashboardService: event from AuthService');
        if (status) {
          console.log('DashboardService: emitting token');
          this.socketService.announceUser(this.authService.currentUsername, this.authService.accessToken);
        }
      });
    }
    this.socketService.getNewAnnouncement$.subscribe( (newannouncement: AnnounceItem) => {
      this.getNewAnnouncement.next(newannouncement);
    });
   }

  getProjectList() {
    if (this.authService.isAuthenticated()) {
      firebase.database().ref('dashboarddata/' + this.authService.currentUser.uid + '/projectlist').once('value', (snapshot) => {
        if (snapshot.val()) {
          this.projectIdList = [];
          for (let i = 0; i < Object.keys(snapshot.val()).length; i++) {
            this.projectIdList.push(snapshot.val()[i]);
          }
          const getpromises = [];
          this.projectList = [];
          for (const projectid of this.projectIdList) {
            getpromises.push(
              firebase.database().ref('projects/' + projectid)
                .once('value', (snap) => {
                  const project = snap.val();
                  const members: string[] = [];
                  if (project.members == null) {
                    project.members = [];
                  }
                  for (let i = 0 ; i < Object.keys(project.members).length ; i++) {
                    members[i] = project.members[i];
                  }
                  this.projectList.push(new ProjectListItem(
                    project.title,
                    project.description,
                    project.status,
                    project.startdate,
                    project.deadline,
                    members,
                    project.leader,
                    project.projectid));
                })
                .catch( (error) => {
                  console.log(error);
                })
            );
          }
          Promise.all(getpromises)
            .then( () => {
              this.getProjects.next(this.projectList);
            })
            .catch( (error) => {
              console.log(error);
              this.getProjects.next(this.projectList);
            });
        } else {
          this.getProjects.next(null);
        }
      })
      .catch(error => {
        console.log(error);
        this.getProjects.next(null);
      });
    } else {
      this.getProjects.next(null);
    }
  }

  getAnnouncement() {
    if (this.authService.isAuthenticated()) {
      firebase.database().ref('dashboarddata/' + this.authService.currentUser.uid + '/announcements').once('value', (snapshot) => {
        if (snapshot.val()) {
          this.announcements = [];
          for (let i = 0; i < Object.keys(snapshot.val()).length; i++) {
            const announce = snapshot.val()[i];
            this.announcements.push(new AnnounceItem(
              announce.from,
              announce.project,
              announce.message,
              announce.date,
              announce.time));
          }
          this.getAnnouncements.next(this.announcements);
        } else {
          this.getAnnouncements.next(null);
        }
      })
      .catch(error => {
        console.log(error);
        this.getAnnouncements.next(null);
      });
    } else {
      this.getAnnouncements.next(null);
    }
  }
}
