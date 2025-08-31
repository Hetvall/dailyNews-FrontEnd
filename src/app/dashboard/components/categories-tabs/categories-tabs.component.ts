import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'categories-tabs',
  imports: [RouterLink, RouterLinkActive, TitleCasePipe],
  standalone: true,
  templateUrl: './categories-tabs.component.html',
  styleUrls: ['./categories-tabs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesTabsComponent {
  categories = [
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology',
  ];
}
