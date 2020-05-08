import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEComponent } from './new-e.component';

describe('NewEComponent', () => {
  let component: NewEComponent;
  let fixture: ComponentFixture<NewEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
