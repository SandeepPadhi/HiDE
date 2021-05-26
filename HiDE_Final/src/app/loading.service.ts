import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingService {

  private loadingStatus = new Subject<string>();
  loadingStatus$ = this.loadingStatus.asObservable();
  isLoading = false;

  constructor() { }

  showLoading() {
    this.isLoading = true;
    this.loadingStatus.next('show');
  }

  removeLoading() {
    this.isLoading = false;
    this.loadingStatus.next('remove');
  }

  showLoadingWithMessage(message: string) {
    this.isLoading = true;
    this.loadingStatus.next('showm!' + message);
  }

  changeMessage(message: string) {
    this.isLoading = true;
    this.loadingStatus.next('change!' + message);
  }
}
