import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
 import { Employee } from '../Employee';
 import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-list-e',
  templateUrl: './list-e.component.html',
  styleUrls: ['./list-e.component.css']
})
export class ListEComponent implements OnInit {
  employee: Employee;
  employees: Employee[];
  show = false;

  constructor(
    private dataService: DataService,
    private employeeService: EmployeeService
    ) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.dataService.sendGetRequest('/employee/all')
      .subscribe(data => {
        console.log(data);
        this.employees = data.employees;
      });
  }

  showInfo(employee: Employee) {
    this.employee = employee;
    this.show = true;
  }

  closeInfo(indata:any) {
    indata==true?this.show = false : this.show = true;
  }

  updateList(indata:any) {
    if(indata) {
      this.getEmployees();
    }
  }

}




  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error);
  //   return Promise.reject(error.message || error);
  // }

  // this.response = this.dataService.sendGetRequest('/employee/all')
  //   .toPromise()
  //   //.then(JSON.parse)
  //   .then((response : Employee[]) =>{
  //     return Promise.resolve(response);
  //   })
  //   .catch(this.handleError);

  // this.dataService.sendGetRequest('/employee/all')
  //   .subscribe(data => {
  //     console.log(data);
  //     this.response = data.employees;
  //   })


