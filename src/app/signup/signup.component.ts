import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../authservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {

  username = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register() {

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    this.authService.register({
      username: this.username,
      email: this.email,
      password: this.password
    }).subscribe(() => {
      alert('Registration successful');
      this.router.navigate(['/login']);
    });
  }
}