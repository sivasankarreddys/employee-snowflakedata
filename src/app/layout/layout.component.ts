import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authservice.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  constructor( private authService: AuthService,
  private router: Router) {}
   currentTime: string = '';
   username: string = '';

ngOnInit() {
  this.username = localStorage.getItem('username') || 'User';
  this.updateTime();

  setInterval(() => {
    this.updateTime();
  }, 1000); // update every second
}

updateTime() {
  const now = new Date();
  this.currentTime = now.toLocaleTimeString();
}
  isLoginPage(): boolean {
    return this.router.url === '/' || this.router.url === '/login';
  }
 logout() {
  this.authService.logout();        // ✅ clear data
  this.router.navigate(['/login']); // ✅ redirect
}
}