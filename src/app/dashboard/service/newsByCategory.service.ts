import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardInterface } from '../interfaces/dashboard.interface';
import { environment } from '../../environments/environment';

const apiUrl = 'https://newsapi.org/v2/top-headlines';

@Injectable({ providedIn: 'root' })
export class NewsByCategoryService {
  private http = inject(HttpClient);
  constructor() {}

  getNewsByCategory(category: string): Observable<DashboardInterface> {
    const params = {
      category: category,
      apiKey: environment.news_apiKey,
      pageSize: 10,
    };
    return this.http.get<DashboardInterface>(apiUrl, { params });
  }
}
