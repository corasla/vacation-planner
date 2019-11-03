import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastVacationsComponent } from './past-vacations.component';

describe('PastVacationsComponent', () => {
  let component: PastVacationsComponent;
  let fixture: ComponentFixture<PastVacationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastVacationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastVacationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
