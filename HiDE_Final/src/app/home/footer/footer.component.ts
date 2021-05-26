import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @ViewChild('footerContainer') footerContainer;

  constructor() { }

  ngOnInit() {
  }

  scrolled(status: string) {
    if (status === 'up') {
      this.footerContainer.nativeElement.style.top = '-100%';
      this.footerContainer.nativeElement.style.opacity = '1';
    } else {
      this.footerContainer.nativeElement.style.top = '0';
      this.footerContainer.nativeElement.style.opacity = '0';
    }
  }
}
