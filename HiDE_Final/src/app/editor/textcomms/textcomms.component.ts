import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { EditorService } from '../editor.service';
import { SocketService } from '../../socket.service';
import { AuthService } from '../../authentication/auth.service';
import { PeerService } from '../../peer.service';

@Component({
  selector: 'app-textcomms',
  templateUrl: './textcomms.component.html',
  styleUrls: ['./textcomms.component.css']
})
export class TextcommsComponent implements OnInit, AfterViewInit {

  @ViewChild('speakerIcon') speakerIcon: ElementRef;
  @ViewChild('textInputField') textInputField: ElementRef;
  @ViewChild('microphoneIcon') microphoneIcon: ElementRef;

  colorClasses = ['#99FFCC', '#CCCCFF', '#CCFF99', '#FFCC99', '#FFFF99'];
  memberColor = {};

  noOfUnreadMessages = 1;
  speakerStatus = true;
  username = null;
  messages = [];

  constructor(
    private editorService: EditorService,
    private socketService: SocketService,
    private authServie: AuthService,
    private peerService: PeerService) {

    this.peerService.createPeer();

    this.socketService.receiveTextMessage$.subscribe( (data) => {
      setTimeout( () => {
        this.messages.push(data);
      }, 0);
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  onToggle() {
    this.editorService.onTextCommsToggle();
  }

  speakerToggle(event: Event) {
    event.stopPropagation();
    this.speakerStatus = !this.speakerStatus;
    if (this.speakerStatus) {
      this.speakerIcon.nativeElement.className = 'speaker';
    } else {
      this.speakerIcon.nativeElement.className = 'nospeaker';
    }
    this.peerService.speakerStatus = this.speakerStatus;
  }

  getRandomColor(memberName) {
    if (this.memberColor[memberName]) {
      return this.memberColor[memberName];
    }
    const colorClassIndex = Math.floor(Math.random() * this.colorClasses.length);
    const colorClass = this.colorClasses[colorClassIndex];
    this.colorClasses.splice(colorClassIndex, 1);
    this.memberColor[memberName] = colorClass;
    return this.memberColor[memberName];
  }

  sendMessage() {
    const message = this.textInputField.nativeElement.value;
    this.textInputField.nativeElement.value = '';
    if (message !== '' && message !== 'undefined') {
      this.socketService.sendTextMessage(message, this.editorService.getProjectID(), this.authServie.currentUsername);
      this.messages.push({
        from: 'me',
        message: message
      });
    }
  }

  streamStart(event: Event) {
    event.stopPropagation();
    this.microphoneIcon.nativeElement.classList.add('micAnimStart');
    this.peerService.startVoiceBroadcast();
  }

  streamEnd(event: Event) {
    event.stopPropagation();
    this.microphoneIcon.nativeElement.classList.remove('micAnimStart');
    this.peerService.endVoiceBroadcast();
  }
}
