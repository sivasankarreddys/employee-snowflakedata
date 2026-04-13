import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent {
  ngOnInit() {
    this.loadEmployees();
  }

  employee: any = {
    id: '',
    name: '',
    department: '',
    emailId:'',
    mobileNo:''
  };
  notFound: boolean = false;

   constructor(private service: EmployeeService, private router: Router) {}

  search() {
    if (!this.employee.id) {
      alert("Please enter ID");
      return;
    }
    
    this.service.getById(this.employee.id).subscribe(
       data => {
     if (!data) {
        this.notFound = true;   // ✅ handle null
        this.employee = null;
      } else {
        this.employee = data;
        this.notFound = false;
      }
    },
    error => {
      this.employee = null;
      this.notFound = true;
    }
      
    );
  }
   goToAdd() {
    this.router.navigate(['/add']);
  }
  delete(id: number) {
    console.log('deleting id is:',id)
      this.service.delete(id).subscribe(() => {
      this.loadEmployees();
      
    });
  }
   edit(id: number) {
     console.log('editing the id is:',id)
    this.router.navigate(['/edit', id]);
  }
  loadEmployees() {
    this.service.getAll().subscribe(data => {
      this.employee = data;
    });
  }
}

