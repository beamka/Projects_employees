import { Component, OnInit } from '@angular/core';
import {Employee} from "../employee";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  routEmployee: Employee = {
    iuadEmployee : "2",
    nameEmployee : "2",
    middlenameEmployee : "2",
    surnameEmployee : "2",
    idEmployee : "2",
    birthdayEmployee : new Date(),
    idPosition : "2",
    projects : []
};

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
