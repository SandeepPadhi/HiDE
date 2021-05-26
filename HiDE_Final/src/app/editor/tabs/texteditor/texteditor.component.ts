import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import * as firebase from 'firebase';
import * as CodeMirror from 'codemirror/lib/codemirror.js';
import * as Firepad from 'firepad/dist/firepad.js';
import { EditorService } from '../../editor.service';
import { SocketService } from '../../../socket.service';

@Component({
  selector: 'app-texteditor',
  templateUrl: './texteditor.component.html',
  styleUrls: ['./texteditor.component.css']
})
export class TexteditorComponent implements OnInit, AfterViewInit {

  @Input() content: string;
  @Input() name: string;
  @Input() path: string;
  @ViewChild('textEditor') textEditor: ElementRef;
  @ViewChild('textEditorContainer') textEditorContainer: ElementRef;

  editor = null;
  firepad = null;

  constructor(
    private editorService: EditorService,
    private socketService: SocketService) {

      this.editorService.saveFile$.subscribe( () => {
        this.socketService.saveFileContent(this.path, this.firepad.getText());
      });

      this.editorService.resizeTextEditorWH$.subscribe( (data) => {
        this.editor.setSize(data.width, data.height);
      });
   }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.editor = CodeMirror(this.textEditor.nativeElement, {
        lineWrapping: true,
        lineNumbers: true,
        autoCloseBrackets: true,
        matchBrackets: true,
        theme: 'lesser-dark',
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
      });

      switch (this.name.substring(this.name.indexOf('.') + 1)) {
        case 'html': {
          this.editor.setOption('mode', 'htmlmixed');
          break;
        }
        case 'js': {
          this.editor.setOption('mode', 'javascript');
          break;
        }
        case 'java': {
          this.editor.setOption('mode', 'text/x-java');
          break;
        }
        case 'c': {
          this.editor.setOption('mode', 'text/x-csrc');
          break;
        }
        case 'cpp': {
          this.editor.setOption('mode', 'text/x-c++src');
          break;
        }
        case 'py': {
          this.editor.setOption('mode', 'python');
          break;
        }
        default: break;
      }
      this.editor.setSize(null, this.textEditorContainer.nativeElement.clientHeight);
      console.log(this.editor);
      this.firepad = Firepad.fromCodeMirror(firebase.database().ref('/projectdata/' + this.editorService.getProjectID() + this.name.replace('.', '-')), this.editor,
        {
          defaultText: this.content
        });
    }, 0);
  }
}
