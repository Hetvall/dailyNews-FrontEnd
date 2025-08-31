import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { DashboardInterface } from '../interfaces/dashboard.interface';
import { Observable } from 'rxjs';

const apiUrl = 'https://newsapi.org/v2/everything';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private http = inject(HttpClient);
  constructor() {}

  getNews(): Observable<DashboardInterface> {
    const params = {
      q: 'news',
      sortBy: 'publishedAt',
      apiKey: environment.news_apiKey,
      pageSize: '11',
    };
    return this.http.get<DashboardInterface>(apiUrl, { params });
  }
}
