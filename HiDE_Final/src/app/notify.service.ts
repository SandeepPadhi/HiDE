import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NotifyService {

  private notifyStatus = new Subject<string>();
  notifyStatus$ = this.notifyStatus.asObservable();

  constructor() { }

  notify(message: string) {
    this.notifyStatus.next(message);
  }
}
