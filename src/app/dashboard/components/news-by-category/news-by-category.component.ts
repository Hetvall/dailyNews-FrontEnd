import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';

import { delay, map } from 'rxjs';

import { NewsByCategoryService } from '../../service/newsByCategory.service';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';
import { NewsCardComponent } from '../../../shared/components/news-card/news-card.component';

@Component({
  selector: 'news-by-category',
  imports: [LoaderComponent, NewsCardComponent],
  templateUrl: './news-by-category.component.html',
  styleUrl: './news-by-category.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsByCategoryComponent {
  private newsByCategoryService = inject(NewsByCategoryService);
  private route = inject(ActivatedRoute);

  category = toSignal(this.route.params.pipe(map(({ category }) => category)));

  categoriesResource = rxResource({
    params: () => ({ category: this.category() }),
    stream: ({ params }) =>
      this.newsByCategoryService
        .getNewsByCategory(params.category)
        .pipe(delay(1000)),
  });
}
