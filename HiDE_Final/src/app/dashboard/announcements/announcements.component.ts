import { LoadingService } from './../../loading.service';
import { DashboardService } from './../dashboard.service';
import { AnnounceItem } from './announceitem.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  announcements: AnnounceItem[] = [];

  constructor(
    private dashboardService: DashboardService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.dashboardService.getAnnouncements$.subscribe( (announcements) => {
      this.announcements = announcements;
      this.loadingService.removeLoading();
    });
    this.dashboardService.getNewAnnouncement$.subscribe( (newannouncement) => {
      this.announcements.push(newannouncement);
    });
    this.dashboardService.getAnnouncement();
    if (this.loadingService.isLoading) {
      this.loadingService.changeMessage('Loading Announcements ...');
    } else {
      this.loadingService.showLoadingWithMessage('Loading Announcements ...');
    }
  }
}
