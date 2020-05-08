import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Employee} from "../employee";
import { EmployeeService } from '../employee.service';
import {FormControl} from '@angular/forms';
import {DataService} from "../data.service";


@Component({
  selector: 'app-card-e',
  templateUrl: './card-e.component.html',
  styleUrls: ['./card-e.component.css'],
})
export class CardEComponent implements OnInit {
  @Input() employee : Employee;
  @Input() flagReadOnly : boolean;
  @Input() flagEdit : boolean;
  @Output() onClose : EventEmitter<boolean> =new EventEmitter<boolean>();
  @Output() onUpdate : EventEmitter<boolean> =new EventEmitter<boolean>();

  employees : Employee[];

  date;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  getFIO(): string {
    return this.employee.nameEmployee + ' ' + this.employee.middlenameEmployee + ' ' + this.employee.surnameEmployee
  }

  clickClose() {
    this.onClose.emit(true);
  }

  clickEdit(employee: Employee){
    this.flagReadOnly = false;
    this.flagEdit = true;
    this.employee = employee;
  }

  closeInfo(indata:any) {
    indata==true?this.flagReadOnly = false : this.flagReadOnly = true;
  }

  clickDelete(employee: Employee) {
    this.dataService.sendGetRequest('/employee/del/'+ employee.idEmployee)
      .subscribe(data => {
        console.log(data);
      });
    this.onUpdate.emit(true);
    this.onClose.emit(true);
  }

}

