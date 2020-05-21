import { ActivatedRoute } from '@angular/router';
import { TestBed, async } from '@angular/core/testing';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NewEComponent } from './new-e.component';
import { autoSpy } from '../../../auto-spy';

import { Project } from '../project';
import {ProjectService} from "../project.service";
import {EmployeeService} from "../employee.service";

//new-e.component.spec.ts
describe('NewEComponent', () => {
  //const route = autoSpy(ActivatedRoute);//[routerLink]="['/app-new-e', false]"
  const dataService = autoSpy(DataService);
  const router = autoSpy(Router);
  const projectService = autoSpy(ProjectService);
  const employeeService = autoSpy(EmployeeService);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewEComponent],
      providers: [
        {provide: ActivatedRoute, useValue: {snapshot: {params: {'flagEdit': 'false'}}}},
        {provide: DataService, useValue: dataService},
        {provide: Router, useValue: router},
        {provide: ProjectService, useValue: projectService},
        {provide: EmployeeService, useValue: employeeService},
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(NewEComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  // it('should create the app', () => {
  //   const { build } = setup().default();
  //   const c = build();
  //   c.cngOnInit();
  //   expect(c).toBeTruthy();
  // });

  it('when ngOnInit is called it should', () => {
    // arrange
    // const { build } = setup().default();
    // const c = build();
    // // act
    // c.ngOnInit();
    // // assert
    // // expect(c).toEqual
    //expect(app).toBeTruthy();
  });

  // it('when getErrorFormName is called it should', () => {
  //   // arrange
  //   const { build } = setup().default();
  //   const c = build();
  //   // act
  //   c.getErrorFormName();
  //   // assert
  //   // expect(c).toEqual
  // });
  //
  // it('when getErrorFormSurname is called it should', () => {
  //   // arrange
  //   const { build } = setup().default();
  //   const c = build();
  //   // act
  //   c.getErrorFormSurname();
  //   // assert
  //   // expect(c).toEqual
  // });
  //
  // it('when getErrorFormIUAD is called it should', () => {
  //   // arrange
  //   const { build } = setup().default();
  //   const c = build();
  //   // act
  //   c.getErrorFormIUAD();
  //   // assert
  //   // expect(c).toEqual
  // });

  // it('when clickClose is called it should', () => {
  //   // arrange
  //   const { build } = setup().default();
  //   const c = build();
  //   // act
  //   c.clickClose();
  //   // assert
  //   // expect(c).toEqual
  // });

  // it('when clickSave is called it should', () => {
  //   // arrange
  //   const { build } = setup().default();
  //   const c = build();
  //   // act
  //   c.clickSave();
  //   // assert
  //   // expect(c).toEqual
  // });

  // it('when showButtonDel is called it should', () => {
  //   // arrange
  //   const { build } = setup().default();
  //   const c = build();
  //  // const projectService = autoSpy(ProjectService);
  //   //const project = projectService.getEmtyProject;
  //   //project.nameProject = "test";
  //   c.showButtonDel(null);
  //   expect(null).toEqual
  // });

  // it('when clickDelProject is called it should', () => {
  //   // arrange
  //   const { build } = setup().default();
  //   const c = build();
  //   // act
  //   c.clickDelProject();
  //   // assert
  //   // expect(c).toEqual
  // });

  // it('when getAllProject is called it should', () => {
  //   // arrange
  //   const { build } = setup().default();
  //   const c = build();
  //   // act
  //   c.getAllProject();
  //   // assert
  //   // expect(c).toEqual
  // });

  // it('when showButtonAdd is called it should', () => {
  //   // arrange
  //   const { build } = setup().default();
  //   const c = build();
  //   // act
  //   c.showButtonAdd();
  //   // assert
  //   // expect(c).toEqual
  // });

  // it('when clickAddProject is called it should', () => {
  //   // arrange
  //   const { build } = setup().default();
  //   const c = build();
  //   // act
  //   c.clickAddProject();
  //   // assert
  //   // expect(c).toEqual
  // });


});

// function setup() {
//   const route = autoSpy(ActivatedRoute);//[routerLink]="['/app-new-e', false]"
//   //route.queryParams.operator(false)
//   const dataService = autoSpy(DataService);
//   const router = autoSpy(Router);
//   const projectService = autoSpy(ProjectService);
//   const employeeService = autoSpy(EmployeeService);
//   const builder = {
//     route,
//     dataService,
//     router,
//     default() {
//       return builder;
//     },
//     build() {
//       TestBed.configureTestingModule({
//             declarations: [NewEComponent],
//             providers: [
//               {provide: ActivatedRoute, useValue: {snapshot: {params: {'flagEdit': 'false'}}}},
//               {provide: DataService, useValue: dataService},
//               {provide: Router, useValue: router},
//               {provide: ProjectService, useValue: projectService},
//               {provide: EmployeeService, useValue: employeeService},
//             ]
//           }).compileComponents();
//       return TestBed.createComponent(NewEComponent).nativeElement;
//       // return new NewEComponent(route,dataService,router,
//       //   projectService, employeeService);
//     }
//   };
//
//   return builder;
// }
