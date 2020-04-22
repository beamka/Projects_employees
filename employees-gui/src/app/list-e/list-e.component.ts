import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
 import { Employee } from '../Employee';
import {Observable} from "rxjs";
//import { Project } from './Project';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-e',
  templateUrl: './list-e.component.html',
  styleUrls: ['./list-e.component.css']
})
export class ListEComponent implements OnInit {
//  employees : Employee[];
  // employees$: Observable<Employee[]>;
  employee: Employee;
  employees: Employee[];
  show = false;

  constructor(private dataService: DataService, private http: HttpClient) {
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


