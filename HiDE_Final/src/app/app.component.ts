import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';
import { Router, NavigationStart } from '@angular/router';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loadingStatus = false;

  constructor(
    private loadingService: LoadingService,
    private router: Router,
    private commonService: CommonService) {

    console.log('AppComponent: constructor');
    this.router.events.subscribe( (event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '/') {
          this.commonService.headerVisibility(true, false, false);
        } else if (event.url.includes('/dashboard')) {
          this.commonService.headerVisibility(false, true, true);
        } else if (event.url === '/profile') {
          this.commonService.headerVisibility(true, false, false);
        }
      }
    });
  }

  ngOnInit() {
    this.loadingService.loadingStatus$.subscribe( (status) => {
      if (status.includes('show') || status.includes('change')) {
        // we have to do this due to strange Error-Expressionchangedafterithasbeenchecked
        setTimeout( () => {
          this.loadingStatus = true;
        });
      } else {
        setTimeout( () => {
          this.loadingStatus = false;
        });
      }
    });
  }
}
