import { Component } from '@angular/core';

@Component({
  selector: 'app-restuarentdash',
  templateUrl: './restuarentdash.component.html',
  styleUrls: ['./restuarentdash.component.scss'],
})
export class RestuarentdashComponent implements OnInit {
  frameZone: any;

  constructor(public el: ElementRef) {}

  ngOnInit() {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });

    this.frameZone = Array.from(document.querySelectorAll('a[href^="#"]'));

    this.frameZone.forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault(); // prevent default anchor behavior

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
        });
      });
    });
  }

  goToMenu(): void {
    window.scrollTo({ left: 0, top: div - 80, behavior: 'smooth' }); // 80 is the height of the navbar
  }
}
