import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { AsyncPipe, DatePipe } from '@angular/common';

import { AuthService } from '../../../auth/service/auth.service';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DatePipe, AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  authService = inject(AuthService);
  private router = inject(Router);

  isLoading = signal<boolean>(false);

  date$ = interval(1000).pipe(map(() => new Date()));

  loginClick(): void {
    this.isLoading.set(true);

    setTimeout(() => {
      this.isLoading.set(false);
      this.router.navigate(['/auth/login']);
    }, 2000);
  }

  logOutClick(): void {
    this.isLoading.set(true);

    setTimeout(() => {
      this.isLoading.set(false);
      this.authService.logout();
    }, 2000);
  }
}
