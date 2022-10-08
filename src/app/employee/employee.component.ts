import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private s: EmployeeService) { }
  employees = this.s.employees;
  newEmployee = this.s.newEmployees;

  ngOnInit(): void {
  }
  sts=false;

  addNewEmployee() {
    this.employees.push(this.newEmployee);
    this.newEmployee = this.s.newEmployees;
  }
  add(){
    this.sts=false;
    this.newEmployee = new Employee (0, "","","",new Date().toString(),"","",new Date().toString(),9,"demo.png");
  }
  getEmployee(a: any) {
    this.sts=true;
    this.newEmployee = a;
  }
  updateEmployee(){
    this.newEmployee = new Employee (0, "","","",new Date().toString(),"","",new Date().toString(),9,"demo.png");
  }

  deleteEmployee(prid:any){
    for (let i = 0; i < this.employees.length; i++) {
      if (prid==this.employees[i]) {
        this.employees.splice(i,1);
      }
      
    }
  }

}
