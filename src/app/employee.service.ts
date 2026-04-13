import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    private baseUrl = 'https://employee-api-4ryu.onrender.com/employee';
  constructor(private http: HttpClient) {}
   getAll() {
    return this.http.get<any[]>(this.baseUrl);
  }
  getById(id: number) {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
  create(emp: any) {
    console.log('Employee Data:', emp);
       return this.http.post(this.baseUrl, emp);
  }
  update(id: number, emp: any) {
    console.log('Employee update Data:', emp);
    return this.http.put(`${this.baseUrl}/${id}`, emp);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
