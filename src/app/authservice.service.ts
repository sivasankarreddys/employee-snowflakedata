import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private baseUrl='http://localhost:8080/employee';
   constructor(private http: HttpClient) {}
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, {
      username: username,
      password: password
    });
  }
  logout() {
  localStorage.removeItem('loggedIn');
  localStorage.removeItem('username');
}
register(data: any) {
  return this.http.post('${this.baseUrl}/register', data);
}
    
  }

 