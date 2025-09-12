import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardService } from './../service/dashboard.service';
import { Article } from '../interfaces/dashboard.interface';
import { NewsCardComponent } from '../components/news-card/news-card.component';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  public articles: Article[] = [];
  private dashboardService = inject(DashboardService);

  ngOnInit(): void {
    this.getDailyNews();
  }

  getDailyNews(): void {
    this.dashboardService.getNews().subscribe((resp) => {
      this.articles = resp.articles;
    });
  }
}
