import { AuthService } from './../authentication/auth.service';
import { Profile } from './profile.model';
import { ProfileService } from './profile.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('profilePic') profilePic: ElementRef;
  @ViewChild('preview') preview: ElementRef;
  @ViewChild('description') description: ElementRef;

  profile: Profile;
  profilePicFile: File;

  constructor(
    private profileService: ProfileService,
    private loadingService: LoadingService,
    private authService: AuthService) { }

  ngOnInit() {
    this.loadingService.showLoadingWithMessage('Loading Profile ...');
    this.profileService.profileGetStatus$.subscribe( (profile) => {
      this.profile = profile;
      this.onSetProfile();
      this.loadingService.removeLoading();
    });
    this.profileService.getProfile();
  }

  onSetProfile() {
    if (this.profile.profilePicUrl) {
      this.preview.nativeElement.style.backgroundImage = 'url(\'' + this.profile.profilePicUrl + '\')';
    }
    if (this.profile.description) {
      this.description.nativeElement.value = this.profile.description;
    }
  }

  onProfilePicture() {
    this.profilePic.nativeElement.click();
  }

  onUpload(event) {
    const file = event.target.files[0];
    if (file) {
      this.profilePicFile = file;
    }
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const url = e.target.result;
      this.preview.nativeElement.style.backgroundImage = 'url(\"' + url.replace(/(\r\n|\n|\r)/gm, '') + '\")';
    };
    reader.readAsDataURL(file);
  }

  onSave() {
    this.loadingService.showLoadingWithMessage('Saving Profile Info ...');
    this.profileService.profileUpdateStatus$.subscribe( (status) => {
      this.loadingService.removeLoading();
    });
    this.profileService.setProfile(this.profilePicFile, this.description.nativeElement.value);
  }

  onPasswordReset() {
    this.profileService.resetPassword();
  }
}
