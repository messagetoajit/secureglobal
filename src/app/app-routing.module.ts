import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './component/employee-details/employee-details.component';
import { EmployeeCreateComponent } from './component/employee-create/employee-create.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './component/employee-update/employee-update.component';
import { CalenderComponent } from './component/calender/calender.component';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: EmployeeCreateComponent },
  { path: 'update/:id', component: EmployeeUpdateComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: 'calender', component: CalenderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
