import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProjectService } from './project.service';
import { ProjectInfo } from './project.model';
import { LoadingService } from '../loading.service';
import { EditorService } from '../editor/editor.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projectid: string;
  projectInfo: ProjectInfo = new ProjectInfo('', '', '', '', '', '', [], '');

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private loadingService: LoadingService,
    private commonService: CommonService,
    private router: Router,
    private editorService: EditorService) {

      this.projectService.getProjectInfo$.subscribe( (projectInfo) => {
        this.loadingService.removeLoading();
        this.projectInfo = projectInfo;
        console.log(this.projectInfo);
      });
    }

  ngOnInit() {
    this.commonService.headerVisibility(false, true, true);

    this.loadingService.showLoadingWithMessage('Loading Project Information ...');
    this.route.params.subscribe( (params: Params) => {
      this.projectid = params['id'];
      this.projectService.getProjectInformation(this.projectid);
    });
  }

  onEdit () {

  }

  onStart () {
    // navigate to editor
    if (this.projectid != null && this.projectid !== '') {
      this.editorService.setProjectID(this.projectid);
      this.router.navigate(['/editor']);
    }
  }
}
