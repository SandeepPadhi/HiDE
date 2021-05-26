import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingService } from '../../loading.service';
import { NotifyService } from '../../notify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private loadingService: LoadingService,
    private notifyService: NotifyService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const username = form.value.username;
    const email = form.value.email;
    const password = form.value.password;
    this.authService.registerUser(username, email, password);
    this.loadingService.showLoadingWithMessage('Signing Up User ...');
    this.authService.registrationStatus$.subscribe( (message) => {
      this.loadingService.removeLoading();
      if (message.includes('true')) {
        this.notifyService.notify('Verification mail sent');
      } else {
        this.notifyService.notify('Error ! Cannot Proceed');
      }
      this.router.navigate(['/signin']);
    });
  }
}
