import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-card-e',
  templateUrl: './card-e.component.html',
  styleUrls: ['./card-e.component.css']
})
export class CardEComponent implements OnInit {
  employees : Employee[];
  surname_e = 'Surname '
  name_e = 'Name '
  middlename_e = 'Middlename '
  iuad_e = 'IUADXXXX'
  birthday = '01.01.2001'

  links = './card-p.component.html'

  constructor() { }

  ngOnInit(): void {
  }

  getFIO(): string {
    return this.name_e + ' ' + this.middlename_e + ' ' + this.surname_e
  }

  testIUAD(){
    this.iuad_e = 'SSSSSS'
  }

}

// public Long idEmployee;
// public String iuadEmployee;
// public String nameEmployee;
// public String surnameEmployee;
// public String middlenameEmployee;
// public Long idPosition;
// public Date birthdayEmployee;
// public List<ProjectAPI> projects;
