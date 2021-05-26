import { Component, OnInit, Input } from '@angular/core';
import { SocketService } from '../../../socket.service';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  @Input() directories: any;

  constructor(private socketService: SocketService) { }

  ngOnInit() {
  }

  onFileClick(file: string, path: string) {
    this.socketService.requestFileContent(file, path);
  }

  filterFiles(node) {
    return node.type === 'file';
  }

  filterDirectories(node) {
    return node.type === 'directory';
  }
}
