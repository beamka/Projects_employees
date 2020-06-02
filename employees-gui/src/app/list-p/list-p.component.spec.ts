import { DataService } from '../data.service';
import {ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ListPComponent } from './list-p.component';
import { Project } from '../Project';
import {Observable,of, Subject} from "rxjs";
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

jest.mock('../data.service');

describe('ListPComponent', () => {
  let component: ListPComponent;
  let fixture: ComponentFixture<ListPComponent>;
  let dataService: DataService;
  const projectTestList : Project[] = [
    {
      idProject: "1",
      nameProject: "testName1",
      descProject: "111",
      employees : []
    },
    {
      idProject: "2",
      nameProject: "testName2",
      descProject: "222",
      employees : []
    }];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ListPComponent ],
      providers: [DataService ],
      schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    dataService = TestBed.get(DataService);

    jest.spyOn(dataService, 'sendGetRequest').mockReturnValue(of(projectTestList));

    fixture = TestBed.createComponent(ListPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when closeInfo is called it should', () => {
    component.closeInfo(false)
    expect(component.show).toEqual(true);
  });

  it('when updateList is called it should', () => {
    component.updateList(true);
    expect(dataService.sendGetRequest).toHaveBeenCalled();
  });

  it('when updateList is called it should', () => {
    component.updateList(true);
    expect(component.projects).toBe(projectTestList);
  });

  it('when showInfo is called it should', () => {
    component.showInfo(projectTestList[0]);
    expect(component.project.nameProject).toEqual("testName1");
  });

   it('when getProject is called it should', () => {
     expect(dataService.sendGetRequest).toHaveBeenCalled();
   });

  it('when ngOnInit is called it should', () => {
    component.ngOnInit();
    expect(component.show).toEqual(false);
  });


});


