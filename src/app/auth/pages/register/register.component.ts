import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);

  hasError = signal(false);
  registerOk = signal(false);
  emailExists = signal(false);

  registerForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    if (this.registerForm.invalid) {
      this.hasError.set(true);
      setTimeout(() => {
        this.hasError.set(false);
      }, 3000);
      return;
    }

    const { email = '', password = '', name = '' } = this.registerForm.value;

    this.authService
      .register(name, email, password)
      .subscribe((isRegistered) => {
        if (isRegistered === true) {
          this.registerOk.set(true);
          setTimeout(() => {
            this.router.navigateByUrl('/auth/login');
          }, 3000);
        } else if (isRegistered === 'email-exists') {
          this.registerOk.set(false);
          this.emailExists.set(true);
          setTimeout(() => {
            this.emailExists.set(false);
          }, 3000);
        } else {
          this.registerOk.set(false);
          this.hasError.set(true);
          setTimeout(() => {
            this.hasError.set(false);
          }, 3000);
        }
      });
  }
}
