import { LoadingService } from './../../loading.service';
import { DashboardService } from './../dashboard.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProjectListItem } from './projectlistitem.model';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent implements OnInit {

  @ViewChild('sortMenu') sortMenu: ElementRef;
  @ViewChild('caret') caret: ElementRef;

  isSortMenuOpened = false;
  projects: ProjectListItem[] = [];
  projectsVisible: ProjectListItem[] = [];

  constructor(
    private dashboardService: DashboardService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.dashboardService.getProjects$.subscribe( (projects) => {
      if (projects) {
        this.projects = projects;
        this.projectsVisible = projects;
      }
    });

    this.dashboardService.getProjectList();
    if (this.loadingService.isLoading) {
      this.loadingService.changeMessage('Loading Project List ...');
    } else {
      this.loadingService.showLoadingWithMessage('Loading Project List ...');
    }
  }

  onSearch(search: string) {
    if (search === '') {
      this.projectsVisible = this.projects;
      return;
    }
    this.projectsVisible = [];
    for (let i = 0; i < this.projects.length; i++) {
      if (
        this.projects[i].title.toLowerCase().includes(search.toLowerCase()) ||
        this.projects[i].description.toLowerCase().includes(search.toLowerCase())
        ) {
        this.projectsVisible.push(this.projects[i]);
      }
    }
  }

  onSortClick() {
    this.isSortMenuOpened = !this.isSortMenuOpened;
    if (this.isSortMenuOpened) {
      this.sortMenu.nativeElement.style.opacity = '1';
      this.sortMenu.nativeElement.style.pointerEvents = 'all';
      this.caret.nativeElement.style.transform = 'rotate(180deg)';
    } else {
      this.sortMenu.nativeElement.style.opacity = '0';
      this.sortMenu.nativeElement.style.pointerEvents = 'none';
      this.caret.nativeElement.style.transform = 'rotate(90deg)';
    }
  }

  onSort(by: string) {
    if (by === 'name' || by === 'category') {
      this.projectsVisible = this.projectsVisible.sort( (a, b) => {
        const x = a.title.toLowerCase();
        const y = b.title.toLowerCase();
        if (x < y) { return -1; }
        if (x > y) { return 1; }
        return 0;
      });
    } else {
      this.projectsVisible = this.projectsVisible.sort( (a, b) => {
        return new Date(a.startdate).getTime() - new Date(b.startdate).getTime();
      });
    }
  }
}
