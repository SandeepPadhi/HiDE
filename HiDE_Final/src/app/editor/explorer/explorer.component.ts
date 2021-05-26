import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProjectConfig } from '../projectconfig.model';
import { LoadingService } from '../../loading.service';
import { SocketService } from '../../socket.service';
import { EditorService } from '../editor.service';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent implements OnInit, AfterViewInit {

  projectConfig: ProjectConfig;

  constructor(
    private socketService: SocketService,
    private loadingService: LoadingService,
    private editorService: EditorService) {

      this.socketService.receiveFileStructure$.subscribe( (data) => {
        setTimeout( () => {
          this.loadingService.removeLoading();
          this.projectConfig = new ProjectConfig(data);
        }, 0);
      });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.socketService.getExplorerStructure(this.editorService.getProjectID());
  }

}
