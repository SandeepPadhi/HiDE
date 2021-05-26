import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CommonService {

  private headerStatus = new Subject<boolean[]>();
  headerStatus$ = this.headerStatus.asObservable();

  isHeaderVisible = false;

  constructor() { }

  headerVisibility(action: boolean, headerToggle: boolean, opacityToggle: boolean) {
    this.isHeaderVisible = action;
    this.headerStatus.next([action, headerToggle, opacityToggle]);
  }
}
