import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Article } from '../interfaces/dashboard.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsPageService {
  private articles: Article[] = [];

  constructor() {
    const stored = localStorage.getItem('articles');
    if (stored) this.articles = JSON.parse(stored);
  }

  setArticles(articles: Article[]): void {
    this.articles = articles;
    localStorage.setItem('articles', JSON.stringify(articles));
  }

  getArticleByUrl(url: string): Observable<Article | undefined> {
    const article = this.articles.find((a) => a.url === url);
    return of(article);
  }
}
