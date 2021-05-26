import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private loadingService: LoadingService,
    private router: Router) {
      console.log('DashboardComponent: constructor');
    }

  ngOnInit() {
    if (this.loadingService.isLoading) {
      this.loadingService.changeMessage('Loading Dashboard ...');
    } else {
      this.loadingService.showLoadingWithMessage('Loading Dashboard ...');
    }
  }

}
