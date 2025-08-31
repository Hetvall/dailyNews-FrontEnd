import {
  ChangeDetectionStrategy,
  Component,
  input,
  Input,
} from '@angular/core';
import { Article } from '../../../dashboard/interfaces/dashboard.interface';
import { FadeScrollComponent } from '../fade-scroll/fade-scroll/fade-scroll.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'news-card',
  imports: [FadeScrollComponent, DatePipe],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css',
})
export class NewsCardComponent {
  @Input({ required: true }) content!: Article;
}
