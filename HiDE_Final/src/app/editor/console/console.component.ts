import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Terminal } from 'xterm';
import * as fit from 'xterm/lib/addons/fit/fit';
Terminal.applyAddon(fit);
import { SocketService } from '../../socket.service';
import { EditorService } from '../editor.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  @ViewChild('consoleTerm') terminalDiv: ElementRef;

  private term: Terminal;
  currConsoleContainerHeight = null;

  constructor(
    private socketService: SocketService,
    private editorService: EditorService) {
      this.editorService.resizeConsoleHeight$.subscribe((height) => {
        this.currConsoleContainerHeight = height;
        if (this.term) {
          this.term.resize(this.term.cols, Math.floor(height / 17));
        }
      });

      this.editorService.resizeConsoleWidth$.subscribe((width) => {
        if (this.term) {
          this.term.resize(Math.floor(width / 9.2), this.term.rows);
        }
      });
  }

  ngOnInit() {
    this.term = new Terminal();
    this.term.open(this.terminalDiv.nativeElement);
    fit.fit(this.term);

    this.socketService.setTermSocket();

    this.socketService.getTermOutput$.subscribe((data) => {
      this.term.write(data);
    });

    this.term.on('data', (data) => {
      this.socketService.sendTermOutput(data);
    });
  }
}
