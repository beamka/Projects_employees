import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Project} from "../project";
import {Employee} from "../employee";
import {DataService} from "../data.service";

@Component({
  selector: 'app-card-p',
  templateUrl: './card-p.component.html',
  styleUrls: ['./card-p.component.css']
})
export class CardPComponent implements OnInit {
  @Input() project: Project;
  @Input() flagReadOnly : boolean;
  @Input() flagEdit : boolean;
  @Output() onClose : EventEmitter<boolean> =new EventEmitter<boolean>();
  @Output() onUpdate : EventEmitter<boolean> =new EventEmitter<boolean>();

  employees: Employee[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  clickClose() {
    this.onClose.emit(true);
  }

  clickEdit(project: Project){
    this.flagReadOnly = false;
    this.flagEdit = true;
    this.project = project;
  }

  closeInfo(indata:any) {
    indata==true?this.flagReadOnly = false : this.flagReadOnly = true;
  }

  clickDelete(project: Project) {
    this.dataService.sendGetRequest('/project/del/'+ project.idProject)
      .subscribe(data => {
        console.log(data);
      });
    this.onUpdate.emit(true);
    this.onClose.emit(true);
  }

}
