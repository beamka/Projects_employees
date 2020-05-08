import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Project} from "../project";
import {Employee} from "../employee";
import {DataService} from "../data.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-p',
  templateUrl: './new-p.component.html',
  styleUrls: ['./new-p.component.css']
})
export class NewPComponent implements OnInit {
  @Input() project : Project;
  @Input() flagEdit : boolean;
  @Output() editClose : EventEmitter<boolean> =new EventEmitter<boolean>();

  show : boolean;
  flagValidData : boolean = true;

  idProject: string;
  nameProject: string;
  descProject: string;
  employees: Employee[];

  selectEmployee : Employee;
  selectAddEmployee : Employee;
  employeesAll : Employee[];

  name = new FormControl('', [Validators.required]);

  constructor(private route: ActivatedRoute, private dataService: DataService,private router: Router) {
    this.flagEdit = route.snapshot.params['flagEdit'];
    this.project = this.getEmtyProject();
    this.selectEmployee = this.getEmtyEmployee();
    this.selectAddEmployee = this.getEmtyEmployee();
    this.getAllEmployee();
  }

  ngOnInit(): void {
    this.idProject = this.project.idProject;
    this.nameProject = this.project.nameProject;
    this.descProject = this.project.descProject;
    this.employees = this.project.employees;
  }

  getTitle() {
    if (this.flagEdit == true) {
      this.show = true;
      return "Редактирование проекта";
    } else {
      this.show = false;
      return "Добавление проекта";
    }
  }

  clickSave() {
    if (this.flagValidData) {
      const saveProject: Project = {
        idProject: this.idProject,
        nameProject: this.nameProject,
        descProject: this.descProject,
        employees: this.employees
      }
      this.dataService.sendPostRequest('/project/set', saveProject)
        .subscribe(data => {
          console.log(data);
        });
      this.router.navigate(['/start-menu', 'Проект сохранено!']);
    }
  }

  getErrorName() {
     if (this.name.hasError('required')) {
       this.flagValidData = false;
      return 'Укажите название проекта';
    }
  }

  clickClose() {
    this.editClose.emit(false);
  }

  getEmtyProject() : Project{
    return  {
      idProject: new Date().getMilliseconds().toString(),
      nameProject: "",
      descProject: "",
      employees : []
    }
  }

  getEmtyEmployee() : Employee{
    return  {
      birthdayEmployee: new Date(),
      idPosition: "",
      iuadEmployee: "",
      middlenameEmployee: "",
      projects: [],
      surnameEmployee: "",
      idEmployee: new Date().getMilliseconds().toString(),
      nameEmployee: ""
    }
  }

  showButtonDel(employee: any) {
    this.selectEmployee = employee;
  }

  clickDelEmployee(selectEmployee: Employee) {
    this.employees.forEach( (item, index) => {
      if(item === selectEmployee) this.employees.splice(index,1);
    });
  }

  showButtonAdd(employee: any) {
    this.selectAddEmployee = employee;
  }

  clickAddEmployee(selectAddEmployee: Employee) {
    this.employees.push(selectAddEmployee);
  }

  getAllEmployee() {
    this.dataService.sendGetRequest('/employee/all')
      .subscribe(data => {
        console.log(data);
        this.employeesAll = data.employees;
      });
  }

}
