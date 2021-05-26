import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  private projectID = '';

  private resizeConsoleHeight = new Subject<any>();
  resizeConsoleHeight$ = this.resizeConsoleHeight.asObservable();

  private resizeConsoleWidth = new Subject<any>();
  resizeConsoleWidth$ = this.resizeConsoleWidth.asObservable();

  private resizeTextEditorWH = new Subject<any>();
  resizeTextEditorWH$ = this.resizeTextEditorWH.asObservable();

  private textCommsToggle = new Subject<null>();
  textCommsToggle$ = this.textCommsToggle.asObservable();

  private saveFile = new Subject<null>();
  saveFile$ = this.saveFile.asObservable();

  constructor() {

    if (localStorage.getItem('projectid')) {
      this.projectID = localStorage.getItem('projectid');
    }
  }

  setProjectID(projectID: string) {
    this.projectID = projectID;
    localStorage.setItem('projectid', this.projectID);
  }

  getProjectID(): string {
    return this.projectID;
  }

  resizeConsoleH(height) {
    this.resizeConsoleHeight.next(parseFloat(height));
  }

  resizeConsoleW(width) {
    this.resizeConsoleWidth.next(parseFloat(width));
  }

  resizeTextEditor(width, height) {
    this.resizeTextEditorWH.next({width: width, height: height});
  }

  onTextCommsToggle() {
    this.textCommsToggle.next();
  }

  syncAll() {
    this.saveFile.next();
  }
}
