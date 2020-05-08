import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {Employee} from "../employee";
import { Project } from '../project';
import {DataService} from "../data.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-e',
  templateUrl: './new-e.component.html',
  styleUrls: ['./new-e.component.css']
})
export class NewEComponent implements OnInit {

  @Input() employee : Employee;
  @Input() flagEdit : boolean;
  @Output() editClose : EventEmitter<boolean> =new EventEmitter<boolean>();

  iuad = new FormControl('', [Validators.required, Validators.pattern(/^[0-9A-Za-z]{8}$/)]);

  idEmployee : string;
  iuadEmployee : string;
  nameEmployee : string;
  surnameEmployee : string;
  middlenameEmployee : string;
  //private Long idPosition;
  birthdayEmployee : Date;
  projects : Project[];
  show : boolean;
  flagValidData : boolean = true;

  selectProject : Project;
  selectAddProject : Project;
  projectsAll : Project[];


  constructor(private route: ActivatedRoute, private dataService: DataService,private router: Router) {
    this.flagEdit = route.snapshot.params['flagEdit'];
    this.employee = this.getEmtyEmployee();
    this.selectProject = this.getEmtyProject();
    this.selectAddProject = this.getEmtyProject();
    this.getAllProject();
  }

  ngOnInit(): void {
    this.idEmployee = this.employee.idEmployee;
    this.iuadEmployee = this.employee.iuadEmployee;
    this.nameEmployee = this.employee.nameEmployee;
    this.surnameEmployee = this.employee.surnameEmployee;
    this.middlenameEmployee = this.employee.middlenameEmployee;
    this.birthdayEmployee = new Date(this.employee.birthdayEmployee);
    this.projects = this.employee.projects;
  }

  getErrorIUAD() {
    if (this.iuad.hasError('required')) {
      this.flagValidData = false;
      return 'Укажите логин сотрудника';
    }
    if (!this.iuad.hasError('iuad')) {
      this.flagValidData = false;
      return 'Логин должен быть в формате IUADXXXX';
    }
   // return this.iuad.hasError('iuad') ? '' : 'Логин должен быть в формате IUADXXXX';
  }

  getTitle() {
    if (this.flagEdit == true) {
      this.show = true;
      return "Редактирование пользователя";
    } else {
      this.show = false;
      return "Добавление пользователя";
    }
  }

  clickClose() {
    this.projects = this.employee.projects;
    this.editClose.emit(false);
  }

  clickSave() {
    if (this.flagValidData) {
      const saveEmployee: Employee = {
        birthdayEmployee: this.birthdayEmployee,
        idPosition: "1",
        iuadEmployee: this.iuadEmployee,
        middlenameEmployee: this.middlenameEmployee,
        projects: this.projects,
        surnameEmployee: this.surnameEmployee,
        idEmployee: this.idEmployee,
        nameEmployee: this.nameEmployee
      }
      this.dataService.sendPostRequest('/employee/set', saveEmployee)
        .subscribe(data => {
          console.log(data);
        });
      this.router.navigate(['/start-menu', 'Сохранено']);
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

  getEmtyProject() : Project{
    return  {
      idProject: new Date().getMilliseconds().toString(),
      nameProject: "",
      descProject: "",
      employees : []
    }
  }


  showButtonDel(project: any) {
    this.selectProject = project;
  }

  clickDelProject(project: any) {
      this.projects.forEach( (item, index) => {
        if(item === project) this.projects.splice(index,1);
      });
  }

  getAllProject() {
    this.dataService.sendGetRequest('/project/all')
      .subscribe(data => {
        console.log(data);
        this.projectsAll = data.projects;
      });
  }

  showButtonAdd(project: any) {
    this.selectAddProject = project;
  }

  clickAddProject(selectProject: Project) {
    this.projects.push(selectProject);
  }
}
