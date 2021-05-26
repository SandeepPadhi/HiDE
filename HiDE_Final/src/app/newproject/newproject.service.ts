import { AuthService } from './../authentication/auth.service';
import { MemberItem } from './memberitem.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class NewprojectService {

  possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  searchMemberStatus = new Subject<MemberItem[]>();
  seacrhMemberStatus$ = this.searchMemberStatus.asObservable();

  projectCreationStatus = new Subject<boolean>();
  projectCreationStatus$ = this.projectCreationStatus.asObservable();

  constructor(
    private http: HttpClient,
    private authService: AuthService) { }

  searchMembers(search: string) {
    this.http.get<{ message: string, members: MemberItem[] }>('/api/getmembers', { params: {search: search} })
      .subscribe( (data) => {
        for (let i = 0 ; i < data.members.length ; i++) {
          if (data.members[i].username === this.authService.currentUsername) {
            data.members.splice(i, 1);
          }
        }
        this.searchMemberStatus.next(data.members);
      }, (error) => {
        console.log(error);
        this.searchMemberStatus.next(null);
      });
  }

  createProject(
    deadline: string,
    description: string,
    leader: string,
    members: string[],
    startdate: string,
    status: string,
    title: string) {

      const uniqueId = this.makeid();
      const uniquePass = this.makeid();

      firebase.database().ref('projects/' + uniqueId).set(
        {
          deadline: deadline,
          description: description,
          leader: leader,
          startdate: startdate,
          status: status,
          title: title,
          members: members,
          projectid: uniqueId,
          projectPassword: uniquePass
        })
        .then( (response) => {
          firebase.database().ref('dashboarddata/' + this.authService.currentUser.uid + '/projectlist').once('value', (snapshot) => {
            let projectlist = snapshot.val();
            if (projectlist == null) {
              projectlist = [];
            }
            firebase.database().ref('dashboarddata/' + this.authService.currentUser.uid + '/projectlist').update({
              [projectlist.length]: uniqueId
            })
            .then( () => {
              // send members to server
              this.http.post< { message: string } >('/api/newproject',
                {
                  members: members,
                  projectid: uniqueId,
                  projectPass: uniquePass,
                  leader: this.authService.currentUsername
                })
                .subscribe( (resp) => {
                  console.log(resp.message);
                },
                (error) => {
                  console.log(error);
                });
              this.projectCreationStatus.next(true);
            })
            .catch( (error) => {
              console.log(error);
              this.projectCreationStatus.next(false);
            });
          });
        })
        .catch( (error) => {
          console.log(error);
          this.projectCreationStatus.next(false);
        });
  }

  makeid() {
    let id = '';
    for (let i = 0; i < 32; i++) {
      id += this.possible.charAt(Math.floor(Math.random() * this.possible.length));
    }
    return id;
  }
}
