import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import {Employee} from "../employee";
import { Project } from '../project';
import {DataService} from "../data.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";
import {FormGroup, FormControl, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-e',
  templateUrl: './new-e.component.html',
  styleUrls: ['./new-e.component.css']
})
export class NewEComponent implements OnInit {

  @Input() employee : Employee;
  @Input() flagEdit : boolean;
  @Output() editClose : EventEmitter<boolean> =new EventEmitter<boolean>();

  title : string;
  show : boolean;
  flagValidData : boolean = true;
  employeeGroup : FormGroup;

  private idEmployee : string;
  projects : Project[];


  selectProject : Project;
  selectAddProject : Project;
  projectsAll : Project[];



  constructor(private route: ActivatedRoute, private dataService: DataService,private router: Router) {
    this.flagEdit = route.snapshot.params['flagEdit'];
    this.title = this.getTitle();
    this.employee = this.getEmtyEmployee();
    this.selectProject = this.getEmtyProject();
    this.selectAddProject = this.getEmtyProject();
    this.getAllProject();

    this.employeeGroup = this.setFormGroup(this.getEmtyEmployee());
  }

  ngOnInit(): void {
    this.title = this.getTitle();
    this.idEmployee = this.employee.idEmployee;
    this.projects = this.employee.projects;

    this.employeeGroup = this.setFormGroup(this.employee);
    // this.employeeGroup.valueChanges.subscribe(value => {
    //   console.log(value);
    // })
  }

  private setFormGroup(employee : Employee) : FormGroup{
    const formGroup = new FormGroup({
      iuad : new FormControl(employee.iuadEmployee, [Validators.required, Validators.pattern(/^[0-9A-Za-z]{8}$/)]),
      name : new FormControl(employee.nameEmployee, [Validators.required]),
      surname : new FormControl(employee.surnameEmployee, [Validators.required]),
      middlename : new FormControl(employee.middlenameEmployee),
      birthday : new FormControl(new Date(employee.birthdayEmployee)),
     // projects : new FormArray([]),
    });
      // employee.projects.forEach(project=>{
      //   (formGroup.controls['projects'] as FormArray).push(new FormControl(project.nameProject));});

      return formGroup;
   // formGroup.controls['projects'].removeAt(index);
  }

  private getTitle() : string{
    if (this.flagEdit == true) {
      this.show = true;
      return "Редактирование пользователя";
    } else {
      this.show = false;
      return "Добавление пользователя";
    }
  }

  getErrorFormName(formGroup : FormGroup) {
    if (formGroup.controls['name'].hasError('required')) {
      this.flagValidData = false;
      return 'Укажите имя сотрудника';
    }
  }

  getErrorFormSurname(formGroup : FormGroup) {
    if (formGroup.controls['surname'].hasError('required')) {
      this.flagValidData = false;
      return 'Укажите фамилию сотрудника';
    }
  }

  getErrorFormIUAD(formGroup : FormGroup) {
    if (formGroup.controls['iuad'].hasError('required')) {
      this.flagValidData = false;
      return 'Укажите логин сотрудника';
    }
    if (!formGroup.controls['iuad'].hasError('iuad')) {
      this.flagValidData = false;
      return 'Логин должен быть в формате IUADXXXX';
    }
  }



  clickClose() {
    this.projects = this.employee.projects;
    this.editClose.emit(false);
  }

  clickSave() {
    if (this.flagValidData) {
      const saveEmployee: Employee = {
        birthdayEmployee: new Date(this.employeeGroup.value.birthday),
        idPosition: "2",
        iuadEmployee: this.employeeGroup.value.iuad,
        middlenameEmployee: this.employeeGroup.value.middlename,
        surnameEmployee: this.employeeGroup.value.surname,
        nameEmployee: this.employeeGroup.value.name,
        idEmployee: this.idEmployee,
        projects: this.projects
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
