import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  username = '';
  password = '';
  loginError: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  login() {
  this.authService.login(this.username, this.password)
    .subscribe({
    next: () => {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', this.username); // ✅ store username
        this.router.navigate(['/search']);
      },
      error: (err) => {
       this.loginError = true; 
      }
    });
}
}