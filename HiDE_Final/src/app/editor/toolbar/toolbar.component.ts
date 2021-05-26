import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SocketService } from '../../socket.service';
import { EditorService } from '../editor.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @ViewChild('fileSuboptionsContainer') fileSuboptionsContainer: ElementRef;
  @ViewChild('editSuboptionsContainer') editSuboptionsContainer: ElementRef;
  @ViewChild('findSuboptionsContainer') findSuboptionsContainer: ElementRef;
  @ViewChild('viewSuboptionsContainer') viewSuboptionsContainer: ElementRef;
  @ViewChild('prefSuboptionsContainer') prefSuboptionsContainer: ElementRef;
  @ViewChild('helpSuboptionsContainer') helpSuboptionsContainer: ElementRef;

  @ViewChild('fileOption') fileOption: ElementRef;
  @ViewChild('editOption') editOption: ElementRef;
  @ViewChild('findOption') findOption: ElementRef;
  @ViewChild('viewOption') viewOption: ElementRef;
  @ViewChild('prefOption') prefOption: ElementRef;
  @ViewChild('helpOption') helpOption: ElementRef;

  isToolbarOpened = false;
  lastOpenedToolbar = '';
  timer: NodeJS.Timer;
  currOpenedToolbar = '';

  constructor(
    private socketService: SocketService,
    private editorService: EditorService) { }

  ngOnInit() {
  }

  toolbarOptionClicked(option: string) {
    this.closeAllToolbars();
    this.openToolbar(option);
    this.currOpenedToolbar = option;
    if (this.isToolbarOpened) {
      if (this.lastOpenedToolbar === option) {
        this.closeAllToolbars();
        this.isToolbarOpened = false;
        this.currOpenedToolbar = '';
      }
    } else {
      this.isToolbarOpened = true;
    }
    this.lastOpenedToolbar = option;
  }

  toolbarOptionEnter(option: string) {
    this.closeAllToolbars();
    if (this.isToolbarOpened) {
      this.openToolbar(option);
      this.lastOpenedToolbar = option;
    } else {
      switch (option) {
        case 'file': {
          this.fileOption.nativeElement.style.backgroundColor = 'gray';
          break;
        }
        case 'edit': {
          this.editOption.nativeElement.style.backgroundColor = 'gray';
          break;
        }
        case 'find': {
          this.findOption.nativeElement.style.backgroundColor = 'gray';
          break;
        }
        case 'view': {
          this.viewOption.nativeElement.style.backgroundColor = 'gray';
          break;
        }
        case 'pref': {
          this.prefOption.nativeElement.style.backgroundColor = 'gray';
          break;
        }
        case 'help': {
          this.helpOption.nativeElement.style.backgroundColor = 'gray';
          break;
        }
        default: { break; }
      }
    }
  }

  openToolbar(option: string) {
    switch (option) {
      case 'file': {
        this.fileSuboptionsContainer.nativeElement.style.opacity = '1';
        this.fileSuboptionsContainer.nativeElement.style.pointerEvents = 'all';
        this.fileOption.nativeElement.style.backgroundColor = 'gray';
        break;
      }
      case 'edit': {
        this.editSuboptionsContainer.nativeElement.style.opacity = '1';
        this.editSuboptionsContainer.nativeElement.style.pointerEvents = 'all';
        this.editOption.nativeElement.style.backgroundColor = 'gray';
        break;
      }
      case 'find': {
        this.findSuboptionsContainer.nativeElement.style.opacity = '1';
        this.findSuboptionsContainer.nativeElement.style.pointerEvents = 'all';
        this.findOption.nativeElement.style.backgroundColor = 'gray';
        break;
      }
      case 'view': {
        this.viewSuboptionsContainer.nativeElement.style.opacity = '1';
        this.viewSuboptionsContainer.nativeElement.style.pointerEvents = 'all';
        this.viewOption.nativeElement.style.backgroundColor = 'gray';
        break;
      }
      case 'pref': {
        this.prefSuboptionsContainer.nativeElement.style.opacity = '1';
        this.prefSuboptionsContainer.nativeElement.style.pointerEvents = 'all';
        this.prefOption.nativeElement.style.backgroundColor = 'gray';
        break;
      }
      case 'help': {
        this.helpSuboptionsContainer.nativeElement.style.opacity = '1';
        this.helpSuboptionsContainer.nativeElement.style.pointerEvents = 'all';
        this.helpOption.nativeElement.style.backgroundColor = 'gray';
        break;
      }
      default: { break; }
    }
  }

  closeAllToolbars() {
    this.fileSuboptionsContainer.nativeElement.style.opacity = '0';
    this.fileSuboptionsContainer.nativeElement.style.pointerEvents = 'none';
    this.fileOption.nativeElement.style.backgroundColor = '#484848';
    this.editSuboptionsContainer.nativeElement.style.opacity = '0';
    this.editSuboptionsContainer.nativeElement.style.pointerEvents = 'none';
    this.editOption.nativeElement.style.backgroundColor = '#484848';
    this.findSuboptionsContainer.nativeElement.style.opacity = '0';
    this.findSuboptionsContainer.nativeElement.style.pointerEvents = 'none';
    this.findOption.nativeElement.style.backgroundColor = '#484848';
    this.viewSuboptionsContainer.nativeElement.style.opacity = '0';
    this.viewSuboptionsContainer.nativeElement.style.pointerEvents = 'none';
    this.viewOption.nativeElement.style.backgroundColor = '#484848';
    this.prefSuboptionsContainer.nativeElement.style.opacity = '0';
    this.prefSuboptionsContainer.nativeElement.style.pointerEvents = 'none';
    this.prefOption.nativeElement.style.backgroundColor = '#484848';
    this.helpSuboptionsContainer.nativeElement.style.opacity = '0';
    this.helpSuboptionsContainer.nativeElement.style.pointerEvents = 'none';
    this.helpOption.nativeElement.style.backgroundColor = '#484848';
  }

  syncClicked() {
    this.socketService.getExplorerStructure(this.editorService.getProjectID());
  }

  syncAllCicked() {
    this.editorService.syncAll();
  }
}
