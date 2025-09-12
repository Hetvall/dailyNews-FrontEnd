import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Base64EncodePipe } from '../pipes/pipes.component';
import { Article } from '../../../dashboard/interfaces/dashboard.interface';
import { FadeScrollComponent } from '../../../shared/components/fade-scroll/fade-scroll/fade-scroll.component';

@Component({
  selector: 'news-card',
  imports: [FadeScrollComponent, RouterLink, Base64EncodePipe],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css',
})
export class NewsCardComponent {
  @Input({ required: true }) content!: Article;
}
