import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

export const NewsRoutes: Routes = [
  {
    path: 'dashboard',
    title: 'Daily News',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: ':category',
        loadComponent: () =>
          import(
            './components/news-by-category/news-by-category.component'
          ).then((m) => m.NewsByCategoryComponent),
      },
      {
        path: 'article/:url',
        loadComponent: () =>
          import('./pages/news-page/news-page.component').then(
            (m) => m.NewsPageComponent
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];
