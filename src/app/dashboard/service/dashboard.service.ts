import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { NewsPageService } from './newsPage.service';
import { DashboardInterface } from '../interfaces/dashboard.interface';
import { environment } from 'environments/environment';

const apiUrl = 'https://newsapi.org/v2/everything';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private http = inject(HttpClient);
  private newsPageService = inject(NewsPageService);

  getNews(): Observable<DashboardInterface> {
    const params = {
      q: 'news',
      sortBy: 'publishedAt',
      apiKey: environment.news_apiKey,
      pageSize: '11',
    };
    return this.http
      .get<DashboardInterface>(apiUrl, { params })
      .pipe(tap((data) => this.newsPageService.setArticles(data.articles)));
  }
}
