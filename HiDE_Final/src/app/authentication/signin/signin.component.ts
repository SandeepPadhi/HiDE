import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifyService } from '../../notify.service';
import { LoadingService } from '../../loading.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private notifyService: NotifyService,
    private loadingService: LoadingService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    this.authService.signinUser(username, password);
    this.loadingService.showLoadingWithMessage('Signing User In ...');
    this.authService.signinStatus$.subscribe( (message) => {
      this.loadingService.removeLoading();
      this.notifyService.notify(message);
    });
  }

  dontHaveAccount() {
    this.router.navigate(['/register']);
  }
}
