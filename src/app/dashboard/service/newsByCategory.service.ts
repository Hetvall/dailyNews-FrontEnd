import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { DashboardInterface } from '../interfaces/dashboard.interface';
import { NewsPageService } from './newsPage.service';
import { environment } from 'src/environments/environment';

const apiUrl = 'https://newsapi.org/v2/top-headlines';

@Injectable({ providedIn: 'root' })
export class NewsByCategoryService {
  private http = inject(HttpClient);
  private newsPageService = inject(NewsPageService);

  getNewsByCategory(category: string): Observable<DashboardInterface> {
    const params = {
      category: category,
      apiKey: environment.news_apiKey,
      pageSize: 10,
    };
    return this.http
      .get<DashboardInterface>(apiUrl, { params })
      .pipe(tap((data) => this.newsPageService.setArticles(data.articles)));
  }
}
