import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { SocketService } from '../../socket.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterViewInit {

  @ViewChild('tabsHeaderScrollContainer') tabsHeaderScrollContainer: ElementRef;

  tabs: Array<{name: string, content: string, path: string}>;
  currActiveTab = '';

  constructor(private socketService: SocketService) {
    this.tabs = [];
  }

  ngOnInit() {
    this.socketService.openFile$.subscribe((data) => {
      for (const tab of this.tabs) {
        if (data.name === tab.name) {
          this.currActiveTab = data.name;
          return;
        }
      }
      this.tabs.push(data);
      this.currActiveTab = data.name;
    });
  }

  ngAfterViewInit() {

  }

  onTabClick(fileName: string) {
    this.currActiveTab = fileName;
  }

  onTabClose(tab) {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }

  setMode(fileName: string) {
    const ext = fileName.substring(fileName.indexOf('.') + 1);
    console.log(ext);
  }
}
