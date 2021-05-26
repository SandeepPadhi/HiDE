import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit, AfterViewInit {

  @ViewChild('loadingScreen') loadingScreen: ElementRef;
  @ViewChild('loadingMessage') loadingMessage: ElementRef;

  loadingItems: HTMLCollectionOf<Element>;
  intervalID: NodeJS.Timer;
  possible = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=:;?.,';
  public isLoading = false;

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.loadingStatus$.subscribe( (status) => {
      if (status.includes('!') && status.includes('show')) {
        this.onShowLoading(status.substr(status.indexOf('!') + 1, status.length));
      } else if (status.includes('!') && status.includes('change')) {
        this.onChangeMessage(status.substr(status.indexOf('!') + 1, status.length));
      } else if (status.includes('show')) {
        this.onShowLoading(null);
      } else {
        this.onRemoveLoading();
      }
    });
  }

  ngAfterViewInit() {
    this.loadingItems = document.getElementsByClassName('loadingItemDynamic');
  }

  onShowLoading(message: string) {
    this.isLoading = true;
    if (message != null) {
      this.loadingMessage.nativeElement.innerText = message;
    } else {
      this.loadingMessage.nativeElement.innerText = 'Loading...';
    }
    this.loadingScreen.nativeElement.style.opacity = '.8';
    this.loadingScreen.nativeElement.style.pointerEvents = 'all';
    for (let i = 0 ; i < this.loadingItems.length ; i++) {
      this.loadingItems.item(i).classList.add('loadingAnimation');
    }
    this.intervalID = setInterval( () => {
      for (let i = 0 ; i < this.loadingItems.length ; i++) {
        this.loadingItems.item(i).innerHTML = this.possible.charAt(Math.floor(Math.random() * this.possible.length));
      }
    }, 500);
  }

  onChangeMessage(message: string) {
    this.isLoading = true;
    this.loadingMessage.nativeElement.innerText = message;
  }

  onRemoveLoading() {
    this.isLoading = false;
    this.loadingScreen.nativeElement.style.opacity = '0';
      this.loadingScreen.nativeElement.style.pointerEvents = 'none';
      for (let i = 0 ; i < this.loadingItems.length ; i++) {
        this.loadingItems.item(i).classList.remove('loadingAnimation');
      }
      clearInterval(this.intervalID);
  }
}
