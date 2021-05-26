import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-announceitem',
  templateUrl: './announceitem.component.html',
  styleUrls: ['./announceitem.component.css']
})
export class AnnounceItemComponent implements OnInit, AfterViewInit {

  @Input() from = '';
  @Input() message = '';
  @Input() date = '';
  @Input() time = '';
  @Input() project = '';

  @ViewChild('message') viewMessage: ElementRef;

  isMesHidden = false;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    if (this.message.length > 50) {
      this.viewMessage.nativeElement.innerText = this.message.substr(0, 47).concat('...');
      this.isMesHidden = true;
    } else {
      this.viewMessage.nativeElement.innerText = this.message;
    }
  }

  onClick() {
    if (this.isMesHidden) {
      this.isMesHidden = false;
      this.viewMessage.nativeElement.innerText = this.message;
    } else {
      if (this.message.length > 50) {
        this.viewMessage.nativeElement.innerText = this.message.substr(0, 47).concat('...');
        this.isMesHidden = true;
      }
    }
  }
}
