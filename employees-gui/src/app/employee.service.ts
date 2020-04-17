import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private apiUrl = 'http://localhost:8080';  // URL to web api

  constructor(
    private http: HttpClient
  ) { }

  // getEmployees(): Promise<Employee[]> {
  //   // const url = `${this.apiUrl}/employee/all`;
  //   // return this.http.get(url).subscribe((data:Employee[]) => this.Employee[]=data)
  //   //   .catch(this.handleError);
  //   // return this.http.get(url)
  //   //   .toPromise()
  //   //   .then(response =>{
  //   //     console.log("user JSON: "+JSON.stringify(response));
  //   //     return Promise.resolve(response.toLocaleString() as Employee[]);
  //   //   })
  //   //   .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
