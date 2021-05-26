import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { CommonService } from '../common.service';
import { EditorService } from './editor.service';
import { LoadingService } from '../loading.service';
import { TextcommsComponent } from './textcomms/textcomms.component';
import { SocketService } from '../socket.service';
import { PeerService } from '../peer.service';
import { TabsComponent } from './tabs/tabs.component';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('statusbarMainContainer', { read: ElementRef }) statusbarMainContainer;
  @ViewChild('toolbarMainContainer', { read: ElementRef }) toolbarMainContainer;
  @ViewChild('explorerMainContainer', { read: ElementRef }) explorerMainContainer;
  @ViewChild('sidepanelMainContainer', { read: ElementRef }) sidepanelMainContainer;
  @ViewChild('explorerBordertabs') explorerBordertabs: ElementRef;
  @ViewChild('tabsBorderconsole') tabsBorderconsole: ElementRef;
  @ViewChild('tabsMainContainer', { read: ElementRef }) tabsMainContainer;
  @ViewChild('tabsMainContainer') tabsMainContainerComp: TabsComponent;
  @ViewChild('consoleMainContainer', { read: ElementRef }) consoleMainContainer;
  @ViewChild('textcommsMainContainer', { read: ElementRef }) textcommsMainContainer;
  @ViewChild('textcommsMainContainer') textcommsMainContainerComponent: TextcommsComponent;

  width = 0;
  height = 0;
  isDragging = false;
  currentMousePos = {x: 0, y: 0};
  explorerTabsResizing = false;
  tabsConsoleResizing = false;
  isTextCommsOpen = false;

  constructor(
    private commonService: CommonService,
    private editorService: EditorService,
    private loadingService: LoadingService,
    private socketService: SocketService,
    private peerService: PeerService) {

      this.editorService.textCommsToggle$.subscribe( () => {
        this.textCommsToggle();
      });
  }

  @HostListener('window:beforeunload', [ '$event' ])
  beforeUnloadHandler() {
    this.socketService.sendProjectClosed(this.editorService.getProjectID());
    this.peerService.destroyPeer();
    this.socketService.sendPeerClosed(this.editorService.getProjectID());
    this.socketService.removeUser();
  }

  ngOnInit() {
    this.commonService.headerVisibility(false, true, true);
    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight;
  }

  ngAfterViewInit() {
    this.socketService.sendProjectOpened(this.editorService.getProjectID());
  }

  ngOnDestroy() {
    console.log('destroyed');
    this.socketService.sendProjectClosed(this.editorService.getProjectID());
    this.peerService.destroyPeer();
    this.socketService.sendPeerClosed(this.editorService.getProjectID());
  }

  explorerTabsResizeStart(event: MouseEvent) {
    this.isDragging = true;
    this.explorerTabsResizing = true;
  }

  explorerTabsResizeEnd(event: MouseEvent) {
    this.isDragging = false;
    this.explorerTabsResizing = false;
  }

  tabsConsoleResizeStart(event: MouseEvent) {
    this.isDragging = true;
    this.tabsConsoleResizing = true;
  }

  tabsConsoleResizeEnd(event: MouseEvent) {
    this.isDragging = false;
    this.tabsConsoleResizing = false;
  }

  mousePosition(event: MouseEvent) {
    if (this.isDragging) {
      this.currentMousePos.x = event.clientX;
      this.currentMousePos.y = event.clientY;
      if (this.explorerTabsResizing) {
        // check limits
        if (this.currentMousePos.x < ((this.width * 15) / 100) || this.currentMousePos.x > ((this.width * 50) / 100)) {
          this.isDragging = false;
          this.explorerTabsResizing = false;
          return;
        } else {
          this.explorerBordertabs.nativeElement.style.left = this.currentMousePos.x + 'px';
          // resize elements
          this.explorerMainContainer.nativeElement.style.width = (this.currentMousePos.x - parseInt(this.sidepanelMainContainer.nativeElement.clientWidth, 10)) + 'px';
          this.tabsMainContainer.nativeElement.style.left = (this.currentMousePos.x + parseInt(this.explorerBordertabs.nativeElement.clientWidth, 10)) + 'px';
          this.tabsMainContainer.nativeElement.style.width = (this.width - this.currentMousePos.x) + 'px';
          this.tabsBorderconsole.nativeElement.style.left = (this.currentMousePos.x + parseInt(this.explorerBordertabs.nativeElement.clientWidth, 10)) + 'px';
          this.tabsBorderconsole.nativeElement.style.width = (this.width - this.currentMousePos.x) + 'px';
          this.consoleMainContainer.nativeElement.style.left = (this.currentMousePos.x + parseInt(this.explorerBordertabs.nativeElement.clientWidth, 10)) + 'px';
          this.consoleMainContainer.nativeElement.style.width = (this.width - this.currentMousePos.x) + 'px';
          this.editorService.resizeConsoleW(this.consoleMainContainer.nativeElement.style.width);
          this.editorService.resizeTextEditor(this.tabsMainContainer.nativeElement.clientWidth, parseInt(this.tabsMainContainer.nativeElement.style.height, 10) - parseInt(this.tabsMainContainerComp.tabsHeaderScrollContainer.nativeElement.clientHeight, 10));
        }
      } else if (this.tabsConsoleResizing) {
        if (this.currentMousePos.y < ((this.height * 50) / 100) || this.currentMousePos.y > ((this.height * 90) / 100)) {
          this.isDragging = false;
          this.tabsConsoleResizing = false;
          return;
        } else {
          this.tabsBorderconsole.nativeElement.style.top = this.currentMousePos.y + 'px';
          // resize elements
          this.tabsMainContainer.nativeElement.style.height = (this.currentMousePos.y - parseInt(this.toolbarMainContainer.nativeElement.clientHeight, 10)) + 'px';
          this.consoleMainContainer.nativeElement.style.top = (this.currentMousePos.y + parseInt(this.tabsBorderconsole.nativeElement.clientHeight, 10)) + 'px';
          this.consoleMainContainer.nativeElement.style.height = (this.height - (this.currentMousePos.y + parseInt(this.tabsBorderconsole.nativeElement.clientHeight, 10) + this.statusbarMainContainer.nativeElement.clientHeight)) + 'px';
          this.editorService.resizeConsoleH(this.consoleMainContainer.nativeElement.style.height);
          this.editorService.resizeTextEditor(this.tabsMainContainer.nativeElement.clientWidth, parseInt(this.tabsMainContainer.nativeElement.style.height, 10) - parseInt(this.tabsMainContainerComp.tabsHeaderScrollContainer.nativeElement.clientHeight, 10));
        }
      }
    }
  }

  textCommsToggle() {
    if (!this.isTextCommsOpen) {
      this.textcommsMainContainer.nativeElement.style.top = '45%';
      this.textcommsMainContainerComponent.noOfUnreadMessages = 0;
    } else {
      this.textcommsMainContainer.nativeElement.style.top = '94.5%';
    }
    this.isTextCommsOpen = !this.isTextCommsOpen;
  }
}
