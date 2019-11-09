import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingVacationsComponent } from './upcoming-vacations.component';

describe('UpcomingVacationsComponent', () => {
  let component: UpcomingVacationsComponent;
  let fixture: ComponentFixture<UpcomingVacationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingVacationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingVacationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
