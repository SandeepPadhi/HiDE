import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NotifyService } from '../notify.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.css']
})
export class NotifyComponent implements OnInit {

  @ViewChild('notifyMessage') notifyMessage: ElementRef;
  @ViewChild('notifyContainer') notifyContainer: ElementRef;

  timeoutID: NodeJS.Timer;

  constructor(private notifyService: NotifyService) { }

  ngOnInit() {
    this.notifyService.notifyStatus$.subscribe( (message) => {
      this.notifyOpen(message);
    });
  }

  notifyOpen(message: string) {
    this.notifyContainer.nativeElement.style.top = '100%';
    this.notifyContainer.nativeElement.style.opacity = '.8';
    this.notifyMessage.nativeElement.innerText = message;
    this.timeoutID = setTimeout( () => {
      this.notifyContainer.nativeElement.style.top = '0';
      this.notifyContainer.nativeElement.style.opacity = '0';
    }, 5000);
  }

  notifyClose() {
    this.notifyContainer.nativeElement.style.top = '0';
    this.notifyContainer.nativeElement.style.opacity = '0';
    if (this.timeoutID) {
      clearTimeout(this.timeoutID);
    }
  }
}
