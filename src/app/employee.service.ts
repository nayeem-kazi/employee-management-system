import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  employees:Employee [] = [
    new Employee (101, "Nayeem","nayeem@gmail.com","Male",'1997-01-19',"Developer","Software",'2022-01-01',9,"nayeem.jpg"),
    new Employee (102, "Masum","masum@gmail.com","Male",'2003-01-01',"Developer","Software",'2022-1-1',9,"masum.jpg"),
    new Employee (103, "Tahamina","tahamina@gmail.com","Female",'1998-01-01',"Developer","Software",'2022-1-1',9,"tahamina.jpg")
  ]
  newEmployees:Employee = new Employee (0, "","","",new Date().toString(),"","",new Date().toString(),9,"demo.jpg");
}
