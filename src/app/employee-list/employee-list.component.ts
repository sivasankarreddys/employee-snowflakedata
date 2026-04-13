import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  employees: any[] = []; 
  constructor(private service: EmployeeService, private router: Router) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.service.getAll().subscribe(data => {
      this.employees = data;
    });
  }

  

 
  
}


