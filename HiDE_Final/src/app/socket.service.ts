import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Subject } from 'rxjs';
import { AnnounceItem } from './dashboard/announcements/announceitem.model';
import { NotificationInvite } from './header/notificationinvite.model';
import { HttpClient } from '@angular/common/http';
import { EditorService } from './editor/editor.service';
import { AuthService } from './authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket;
  private termSocket;
  private seServer = '192.168.0.4';
  private localhost = 'localhost';

  getTermOutput = new Subject<any>();
  getTermOutput$ = this.getTermOutput.asObservable();

  getNewAnnouncement = new Subject<AnnounceItem>();
  getNewAnnouncement$ = this.getNewAnnouncement.asObservable();

  getInviteNotification = new Subject<NotificationInvite>();
  getInviteNotification$ = this.getInviteNotification.asObservable();

  receiveTextMessage = new Subject<{from: string, message: string}>();
  receiveTextMessage$ = this.receiveTextMessage.asObservable();

  receiveChangePeers = new Subject<{}>();
  receiveChangePeers$ = this.receiveChangePeers.asObservable();

  receiveFileStructure = new Subject<{}>();
  receiveFileStructure$ = this.receiveFileStructure.asObservable();

  private openFile = new Subject<any>();
  openFile$ = this.openFile.asObservable();

  constructor(
    private http: HttpClient,
    private editorService: EditorService,
    private authService: AuthService) {

    console.log('SocketService: constructor');

    this.socket = io('http://' + this.localhost + ':4000');
    this.termSocket = io('http://' + this.seServer + ':4000');

    this.socket.on('newannounce', (data) => {
      if (data) {
        data = JSON.parse(data);
        this.getNewAnnouncement.next(new AnnounceItem(data.from, data.project, data.message, data.date, data.time));
      }
    });

    this.socket.on('notifyinvite', (data) => {
      if (data) {
        data = JSON.parse(data);
        this.getInviteNotification.next(new NotificationInvite(data.from, data.message, data.inviteLink, data.status, data.projectid));
      }
    });

    this.socket.on('receivemessage', (data) => {
      this.receiveTextMessage.next(data);
    });

    this.socket.on('changepeers', (data) => {
      this.receiveChangePeers.next(data);
    });
  }

  announceUser(username: string, accessToken: string) {
    this.socket.emit('announceuser', JSON.stringify(
      {
        username: username,
        token: accessToken
      }));
  }

  setTermSocket() {

    this.http.post< { username: string, password: string } >('/api/getconsolecred',
    {
      projectid: this.editorService.getProjectID()
    })
    .subscribe( (resp) => {
      console.log(resp);
      if (resp.username != null && resp.password != null) {
        this.termSocket.emit('cred', {username: resp.username, password: resp.password});
      } else {
        this.getTermOutput.next('Bad Credentials!');
      }
    }, (error) => {
        console.log(error);
    });

    this.termSocket.on('connect', () => {
      this.getTermOutput.next('\r\n*** Connected to backend***\r\n');
    });

    this.termSocket.on('data', (data) => {
      this.getTermOutput.next(data);
    });

    this.termSocket.on('disconnect', () => {
      this.getTermOutput.next('\r\n*** Disconnected from backend***\r\n');
    });

    this.termSocket.on('receivedirtree', (data) => {
      this.receiveFileStructure.next(data.tree);
    });

    this.termSocket.on('receivefile', (data) => {
      this.openFile.next(data);
    });
  }

  sendTermOutput(data) {
    this.termSocket.emit('data', data);
  }

  sendTextMessage(message, projectid, username) {
    this.socket.emit('sendmessage', {
      message: message,
      projectid: projectid,
      username: username
    });
  }

  sendProjectOpened(projectid) {
    this.socket.emit('projectopen', {
      projectid: projectid
    });
  }

  sendProjectClosed(projectid) {
    this.socket.emit('projectclose', {
      projectid: projectid
    });
  }

  sendPeerOpened(projectid, peerid) {
    this.socket.emit('openpeer', {
      projectid: projectid,
      peerid: peerid
    });
  }

  sendPeerClosed(projectid) {
    this.socket.emit('closepeer', {
      projectid: projectid
    });
  }

  getExplorerStructure(projectid) {
    this.termSocket.emit('getdirtree', {
      projectid: projectid
    });
  }

  removeUser() {
    this.socket.emit('removeuser', {
      username: this.authService.currentUsername
    });
  }

  requestFileContent(name, path) {
    this.termSocket.emit('getfile', {
      name: name,
      path: path
    });
  }

  saveFileContent(path, content) {
    console.log(path + content);
    this.termSocket.emit('savefile', {
      path: path,
      content: content
    });
  }
}
