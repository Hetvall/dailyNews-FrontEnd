import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { DashboardInterface } from '../interfaces/dashboard.interface';
import { NewsPageService } from './newsPage.service';
import { environment } from '../../../environments/environment';

const apiUrl = 'https://dailynews-71ep.onrender.com/api/news';

@Injectable({ providedIn: 'root' })
export class NewsByCategoryService {
  private http = inject(HttpClient);
  private newsPageService = inject(NewsPageService);

  getNewsByCategory(category: string): Observable<DashboardInterface> {
    return this.http
      .get<DashboardInterface>(`${apiUrl}/${category}`)
      .pipe(tap((data) => this.newsPageService.setArticles(data.articles)));
  }
}
