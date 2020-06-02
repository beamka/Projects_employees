import { Component, Output, OnInit, Input } from '@angular/core';
import { Project } from '../Project';
import { DataService } from '../data.service';
import {Employee} from "../employee";

@Component({
  selector: 'app-list-p',
  templateUrl: './list-p.component.html',
  styleUrls: ['./list-p.component.css']
})
export class ListPComponent implements OnInit {
  public project: Project;
  public projects: Project[];
  public show = false;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getProject();
  }

  updateList(indata:any) {
    if(indata) {
      this.getProject();
    }
  }

  getProject(){
    this.dataService.sendGetRequest('/project/all')
      .subscribe(data => {
        //console.log(data);
        this.projects = data.projects;
      });
  }

  showInfo(project: Project) {
    this.project = project;
    this.show = true;
  }

  closeInfo(indata:any) {
    indata==true?this.show = false : this.show = true;
  }


}
