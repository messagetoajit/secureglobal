import { Observable } from "rxjs";
import { EmployeeService } from "../../service/employee.service";
import { Employee } from "../../domain/employee";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.sass"]
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;
  id: string;

  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
    this.id = "";
  }

  employeeDetails(id: string){
    this.router.navigate(['details', id]);
  }

  updateEmployee(id: string) {
    this.router.navigate(['update', id]);
  }

  setDelete(id: string) {
    this.id = id;
  }
}