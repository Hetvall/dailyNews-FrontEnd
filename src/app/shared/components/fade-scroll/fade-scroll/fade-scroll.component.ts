import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'fade-scroll',
  standalone: true,
  imports: [],
  templateUrl: './fade-scroll.component.html',
  styleUrl: './fade-scroll.component.css',
})
export class FadeScrollComponent implements OnInit {
  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
  }

  private checkScroll(): void {
    const elements = document.querySelectorAll('.fade-scroll');
    const windowHeight = window.innerHeight;

    elements.forEach((element: Element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
  }
}
