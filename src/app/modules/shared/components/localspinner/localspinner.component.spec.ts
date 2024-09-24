import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalspinnerComponent } from './localspinner.component';

describe('LocalspinnerComponent', () => {
  let component: LocalspinnerComponent;
  let fixture: ComponentFixture<LocalspinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalspinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalspinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
