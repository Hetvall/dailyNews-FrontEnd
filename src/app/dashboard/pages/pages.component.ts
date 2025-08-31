import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  imports: [],
  template: `<p>pages works!</p>`,
  styleUrl: './pages.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagesComponent { }
