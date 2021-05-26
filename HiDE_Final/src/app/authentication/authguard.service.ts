import { NotifyService } from './../notify.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  visitedFlag = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private notifyService: NotifyService) {
      console.log('AuthGuard: constructor');
    }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('AuthGuard: canActivate called');
    if (!this.authService.isAuthenticated()) {
      console.log('AuthGuard: not already authenticated');
      if (this.visitedFlag && this.authService.isAuthenticated()) {
        console.log('AuthGuard: visitedFlag is true, allowing');
        return true;
      }
      return this.authService.authStatus$.pipe(
        map( (status) => {
        console.log('AuthGuard: event from AuthService');
        if (status) {
          this.visitedFlag = true;
          console.log('AuthGuard: authenticated');
          return true;
        }
        console.log('AuthGuard: not authenticated');
        this.notifyService.notify('Please log in first');
        this.router.navigate(['/signin']);
      }));
    } else {
      console.log('AuthGuard: already authenticated');
      return true;
    }
  }
}
