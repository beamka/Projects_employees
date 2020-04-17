import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEComponent } from './card-e.component';

describe('CardEComponent', () => {
  let component: CardEComponent;
  let fixture: ComponentFixture<CardEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
