import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEComponent } from './list-e.component';

describe('ListEComponent', () => {
  let component: ListEComponent;
  let fixture: ComponentFixture<ListEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
