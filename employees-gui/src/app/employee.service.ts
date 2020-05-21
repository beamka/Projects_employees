import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Employee } from './Employee';
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private dataService: DataService
  ) {}

  getEmtyEmployee() : Employee{
    return  {
      birthdayEmployee: new Date(),
      idPosition: "",
      iuadEmployee: "",
      middlenameEmployee: "",
      projects: [],
      surnameEmployee: "",
      idEmployee: new Date().getMilliseconds().toString(),
      nameEmployee: ""
    }
  }

  getEmployees(employees : Employee[]): any {
    this.dataService.sendGetRequest('/employee/all')
      .subscribe(data => {
        console.log(data);
        employees = data.employees;
      });
  }

  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error);
  //   return Promise.reject(error.message || error);
//}
}
