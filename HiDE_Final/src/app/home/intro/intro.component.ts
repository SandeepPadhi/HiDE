import { Component, OnInit, ViewChild, AfterViewInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})

export class IntroComponent implements OnInit, AfterViewInit {

  @ViewChild('typingContainer') typingContainer;
  @ViewChild('servicesContainer') servicesContainer;
  @ViewChild('transformText') transformText;
  @ViewChild('transformLogo') transformLogo;
  @ViewChild('introCard1') introCard1;
  @ViewChild('introCard2') introCard2;
  @ViewChild('introCard3') introCard3;

  @Output() footerEvent = new EventEmitter();

  constructor() { }

  intervalID1: NodeJS.Timer;
  intervalID2: NodeJS.Timer;
  intervalID3: NodeJS.Timer;
  isCardMoving = false;
  lastScroll = 'undefined';
  currentCard = 1;
  phrases = [
    'IDE-<hybrid> IDE </hybrid>',
    'cloud + development = ?-HiDE',
    'Online Project ?-Start in 2 Mins !'];
  footerUp = false;

  ngOnInit() {
  }

  scrolled(event: WheelEvent, element) {
    this.lastScroll = (event.deltaY > 0) ? 'down' : 'up';
    if (!this.isCardMoving && this.lastScroll === 'down') {
      if (!(this.currentCard + 1 > 3)) {
        this.isCardMoving = true;
        eval('this.introCard' + (this.currentCard).toString() + '.nativeElement.style.opacity = \'0\'');
        eval('this.introCard' + (this.currentCard + 1).toString() + '.nativeElement.style.top = \'0\'');
        eval('this.introCard' + (this.currentCard + 1).toString() + '.nativeElement.style.opacity = \'1\'');
        this.currentCard += 1;
        setTimeout( () => {
          this.isCardMoving = false;
        }, 600);
      } else {
        if (!this.footerUp) {
          this.isCardMoving = true;
          this.footerUp = true;
          this.footerEvent.emit('up');
          setTimeout( () => {
            this.isCardMoving = false;
          }, 600);
        }
      }
    } else if (!this.isCardMoving && this.lastScroll === 'up') {
      if (this.footerUp) {
        this.isCardMoving = true;
        this.footerEvent.emit('down');
        setTimeout( () => {
          this.isCardMoving = false;
          this.footerUp = false;
        }, 600);
      }
      if (!(this.currentCard < 2) && !this.footerUp) {
        this.isCardMoving = true;
        if (this.currentCard - 1 !== 0) {
          eval('this.introCard' + (this.currentCard - 1).toString() + '.nativeElement.style.opacity = \'1\'');
        }
        eval('this.introCard' + this.currentCard + '.nativeElement.style.top = \'100%\'');
        eval('this.introCard' + this.currentCard + '.nativeElement.style.opacity = \'0\'');
        this.currentCard -= 1;
        setTimeout( () => {
          this.isCardMoving = false;
        }, 600);
      }
    }
  }

  startAnimating(text: string) {
    const phases = text.split('-');
    const phase1 = phases[0];
    const phase2 = phases[1];
    let string1 = '';
    let string2 = '';
    let currentIndex = 0;
    this.intervalID1 = setInterval(() => {
      string1 += phase1.charAt(currentIndex);
      this.transformText.nativeElement.innerText = string1;
      if (currentIndex + 1 >= phase1.length) {
        clearInterval(this.intervalID1);
        currentIndex = phase1.length;
        setTimeout( () => {
          this.intervalID2 = setInterval(() => {
            this.transformText.nativeElement.innerText = phase1.substring(0, currentIndex);
            if (currentIndex - 1 === -1) {
              clearInterval(this.intervalID2);
              currentIndex = 0;
              this.intervalID3 = setInterval( () => {
                string2 += phase2.charAt(currentIndex);
                this.transformText.nativeElement.innerText = string2;
                if (currentIndex + 1 >= phase2.length) {
                  clearInterval(this.intervalID3);
                  setTimeout( () => {
                    this.transformText.nativeElement.style.opacity = '0';
                    this.transformLogo.nativeElement.style.opacity = '1';
                    this.typingContainer.nativeElement.style.top = '0vh';
                    this.servicesContainer.nativeElement.style.opacity = '1';
                  }, 700);
                } else {
                  currentIndex += 1;
                }
              }, 50);
            } else {
              currentIndex -= 1;
            }
          }, 30);
        }, 700);
      } else {
        currentIndex += 1;
      }
    }, 50);
  }

  ngAfterViewInit() {
    setTimeout( () => {
      this.startAnimating(this.phrases[Math.floor(Math.random() * (this.phrases.length - 0)) + 0]);
    }, 500);
  }
}
