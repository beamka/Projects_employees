import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Project} from "../project";
import {Employee} from "../employee";
import {DataService} from "../data.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-p',
  templateUrl: './new-p.component.html',
  styleUrls: ['./new-p.component.css']
})
export class NewPComponent implements OnInit {
  @Input() project : Project;
  @Input() flagEdit : boolean;
  @Output() editClose : EventEmitter<boolean> =new EventEmitter<boolean>();

  title : string;
  show : boolean;
  flagValidData : boolean = true;
  projectGroup : FormGroup;

  private idProject: string;
  employees: Employee[];

  selectEmployee : Employee;
  selectAddEmployee : Employee;
  employeesAll : Employee[];

  constructor(private route: ActivatedRoute, private dataService: DataService,private router: Router) {
    this.flagEdit = route.snapshot.params['flagEdit'];
    this.title = this.getTitle();
    this.project = this.getEmtyProject();
    this.selectEmployee = this.getEmtyEmployee();
    this.selectAddEmployee = this.getEmtyEmployee();
    this.getAllEmployee();

    this.projectGroup = this.setFormGroup(this.getEmtyProject());
  }

  ngOnInit(): void {
    this.title = this.getTitle();
    this.idProject = this.project.idProject;
    this.employees = this.project.employees;

    this.projectGroup = this.setFormGroup(this.project);
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

  private setFormGroup(project : Project) : FormGroup{
    const formGroup = new FormGroup({
      name : new FormControl(project.nameProject, [Validators.required]),
      desc : new FormControl(project.descProject, [Validators.required]),
    });
    return formGroup;
  }

  getErrorName(formGroup : FormGroup) {
    if (formGroup.controls['name'].hasError('required')) {
      this.flagValidData = false;
      return 'Укажите название проекта';
    }
  }
  getErrorDesc(formGroup : FormGroup) {
    if (formGroup.controls['desc'].hasError('required')) {
      this.flagValidData = false;
      return 'Укажите описание проекта';
    }
  }

  clickSave() {
    if (this.flagValidData) {
      const saveProject: Project = {
        idProject: this.idProject,
        nameProject: this.projectGroup.value.name,
        descProject: this.projectGroup.value.desc,
        employees: this.employees
      }
      this.dataService.sendPostRequest('/project/set', saveProject)
        .subscribe(data => {
          console.log(data);
        });
      this.router.navigate(['/start-menu', 'Проект сохранено!']);
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
