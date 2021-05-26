import { HttpClient } from '@angular/common/http';
import { AuthService } from './../authentication/auth.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProjectInfo } from './project.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private getProjectInfo = new Subject<ProjectInfo>();
  getProjectInfo$ = this.getProjectInfo.asObservable();

  projectInfo: ProjectInfo = new ProjectInfo('', '', '', '', '', '', [], '');

  constructor(
    private authService: AuthService,
    private http: HttpClient) {
   }

  getProjectInformation(projectid: string) {
    let members = [];
    firebase.database().ref('projects/' + projectid).once('value', (snapshot) => {
      if (snapshot.val()) {
        const project = snapshot.val();
        this.projectInfo.projectDeadline = project.deadline;
        this.projectInfo.projectDesc = project.description;
        this.projectInfo.leader = project.leader;
        if (project.members) {
          this.projectInfo.members = project.members;
          members = project.members;
        } else {
          this.projectInfo.members = {};
        }
        this.projectInfo.projectid = project.projectid;
        this.projectInfo.projectStartdate = project.startdate;
        this.projectInfo.status = project.status;
        this.projectInfo.projectTitle = project.title;
      }
    })
    .then( (response) => {
      this.http.get<{ message: string, members: any}>('/api/getmemberavatars', {params: { members: JSON.stringify(members)}})
        .subscribe( (data) => {
          if (data.message.split('-')[0] === 'true') {
            this.projectInfo.members = data.members;
            this.getProjectInfo.next(this.projectInfo);
          } else {
            this.getProjectInfo.next(null);
          }
        });
    })
    .catch( (error) => {
      this.getProjectInfo.next(null);
      console.log(error);
    });
  }
}
