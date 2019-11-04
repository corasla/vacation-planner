import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AllPlacesComponent } from './places/components/all-places/all-places.component';
import { PastVacationsComponent } from './places/components/past-vacations/past-vacations.component';
import { UpcomingVacationsComponent } from './places/components/upcoming-vacations/upcoming-vacations.component';
import { PlaceComponent } from './places/components/place/place.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        MatButtonModule,
        MatInputModule
      ],
      declarations: [
        AppComponent,
        AllPlacesComponent,
        PastVacationsComponent,
        UpcomingVacationsComponent,
        PlaceComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'vacation-planner'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('vacation-planner');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('vacation-planner app is running!');
  // });
});
