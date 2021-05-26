import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';
import { EditorService } from './editor/editor.service';

@Injectable({
  providedIn: 'root'
})
export class PeerService {

  speakerStatus = true;
  peer = null;
  peerid = null;
  remotePeers = [];
  calls = [];

  audioStream = null;
  audioContext: AudioContext;

  constructor(
    private socketService: SocketService,
    private editorService: EditorService) {

    this.socketService.receiveChangePeers$.subscribe( (data) => {
      const remotePeers = [];
      for (const socketid of Object.keys(data)) {
        if (data[socketid] !== this.peerid) {
          remotePeers.push(data[socketid]);
        }
      }
      this.remotePeers = remotePeers;
      console.log(this.remotePeers);
    });
  }

  createPeer() {
    this.peer = new Peer({key: 'lwjd5qra8257b9'});
    this.audioContext = new AudioContext();

    this.audioContext.addEventListener('statechange', () => {
      console.log(this.audioContext.state);
      if (this.audioContext.state !== 'running') {
        console.log('resuming');
        this.audioContext.resume().then( () => {
          console.log('resumed');
        });
      }
    });

    this.peer.on('open', (id) => {
      this.peerid = id;
      console.log(this.peerid);
      this.socketService.sendPeerOpened(this.editorService.getProjectID(), this.peerid);
    });

    this.peer.on('call', (call) => {
      console.log('answered');
      call.answer();
      call.on('stream', (stream) => {
        const audio = new Audio();
        audio.srcObject = stream;
        if (this.speakerStatus) {
          audio.play();
        }
      });
      call.on('close', () => {
      });
      call.on('error', (error) => {
        console.log(error);
      });
    });

    this.peer.on('error', (error) => {
      console.log(error);
    });

    const nav = <any>navigator;
    nav.getUserMedia =  ( nav.getUserMedia || nav.webkitGetUserMedia || nav.mozGetUserMedia || nav.msGetUserMedia );
    nav.getUserMedia({video: false, audio: true}, (stream) => {
      this.audioStream = stream;
    }, (error) => {
      console.log(error);
    });
  }

  destroyPeer() {
    this.peer.destroy();
  }

  startVoiceBroadcast() {
    if (this.audioStream !== null && this.remotePeers.length > 0) {
      for (const peerid of this.remotePeers) {
        const call = this.peer.call(peerid, this.audioStream);
        this.calls.push(call);
      }
    }
  }

  endVoiceBroadcast() {
    if (this.audioStream != null && this.remotePeers.length > 0) {
      for (const call of this.calls) {
        call.close();
      }
    }
  }
}
