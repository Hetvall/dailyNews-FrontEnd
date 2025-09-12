import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Article } from '../../interfaces/dashboard.interface';
import { NewsPageService } from '../../service/newsPage.service';
import { FadeScrollComponent } from '../../../shared/components/fade-scroll/fade-scroll/fade-scroll.component';
import { delay } from 'rxjs';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'news-page',
  imports: [FadeScrollComponent, LoaderComponent, DatePipe],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.css',
})
export class NewsPageComponent {
  activatedRoute = inject(ActivatedRoute);
  newsService = inject(NewsPageService);

  newsUrl: string = this.activatedRoute.snapshot.params['url'];
  decodeUrl: string = atob(this.newsUrl);

  newsResource = rxResource<Article | undefined, { url: string }>({
    params: () => ({ url: this.decodeUrl }),
    stream: ({ params }) =>
      this.newsService.getArticleByUrl(params.url).pipe(delay(1000)),
  });
}
