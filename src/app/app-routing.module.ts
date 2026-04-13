import { Component, NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
 { path: '',
    component: LayoutComponent,   // ✅ wrap all pages
    children: [
  { path: 'list', component: EmployeeListComponent },
   { path: '', component: EmployeeSearchComponent },
  { path: 'add', component: EmployeeFormComponent },
  { path: 'edit/:id', component: EmployeeFormComponent } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
