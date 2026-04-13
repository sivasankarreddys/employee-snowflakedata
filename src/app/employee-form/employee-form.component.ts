import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html'
})
export class EmployeeFormComponent implements OnInit {

  employee: any = {
    id: '',
    name: '',
    department: ''
  };

  isEdit = false;

  constructor(
    private service: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.service.getById(id).subscribe(data => {
        this.employee = data;
      });
    }
  }

  save() {
    if (this.isEdit) {
      console.log('Save update data:', this.employee)
     
      this.service.update(this.employee.id, this.employee)
        .subscribe(() => this.router.navigate(['/']));
    } else {
        console.log('Save data:', this.employee)      
      this.service.create(this.employee)
        .subscribe(() => this.router.navigate(['/']));
    }
  }
}