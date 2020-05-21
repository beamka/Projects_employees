import { Injectable } from '@angular/core';
import {Project} from "./project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getEmtyProject() : Project{
    return  {
      idProject: new Date().getMilliseconds().toString(),
      nameProject: "",
      descProject: "",
      employees : []
    }
  }
}
