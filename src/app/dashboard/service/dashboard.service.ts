import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { NewsPageService } from './newsPage.service';
import { DashboardInterface } from '../interfaces/dashboard.interface';

const apiUrl = 'https://dailynews-71ep.onrender.com/api/news';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private http = inject(HttpClient);
  private newsPageService = inject(NewsPageService);

  getNews(): Observable<DashboardInterface> {
    return this.http
      .get<DashboardInterface>(apiUrl)
      .pipe(tap((data) => this.newsPageService.setArticles(data.articles)));
  }
}
