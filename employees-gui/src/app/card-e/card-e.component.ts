import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Employee} from "../employee";
import { EmployeeService } from '../employee.service';


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

  employees : Employee[];
  routEmployee: Employee;
  // date = new Date(2010,5,10);
  date;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.routEmployee = Employee[+params.get('employee')];
      this.date = new Date("2010/7/5");
      //this.date =  new FormControl(new Date(10/10/2010));
    });
  }

  getFIO(): string {
    return this.employee.nameEmployee + ' ' + this.employee.middlenameEmployee + ' ' + this.employee.surnameEmployee
  }

  clickClose() {
    this.onClose.emit(true);
  }

  getTitle() {
    if (this.flagEdit == true) {
      return "Редактирование пользователя";
    } else {
      return "Добавление пользователя";
    }
  }

  clickEdit(){
    this.flagReadOnly = false;
    this.flagEdit = true;
  }

}
//indata==true?this.show = false : this.show = true;
// public Long idEmployee;
// public String iuadEmployee;
// public String nameEmployee;
// public String surnameEmployee;
// public String middlenameEmployee;
// public Long idPosition;
// public Date birthdayEmployee;
// public List<ProjectAPI> projects;
