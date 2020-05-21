import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public REST_API_SERVER = "http://localhost:5555";
  public GUI_SERVER = "http://localhost:4200/";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(path) : Observable<any>{
    return this.httpClient.get<any>(this.REST_API_SERVER + path);
  }

  public sendPostRequest(path, body) : Observable<any>{
    return this.httpClient.post<any>(this.REST_API_SERVER+path, body);
  }

}

