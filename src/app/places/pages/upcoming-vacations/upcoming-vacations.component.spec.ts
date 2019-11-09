import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingVacationsComponent } from './upcoming-vacations.component';
import { PlaceComponent } from 'src/app/places/components/place/place.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatDialogModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CharCountPipe } from 'src/app/pipes/char-count.pipe';
import { MyUnlessDirective } from 'src/app/directives/my-unless.directive'

describe('UpcomingVacationsComponent', () => {
  let component: UpcomingVacationsComponent;
  let fixture: ComponentFixture<UpcomingVacationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, MatButtonModule, MatInputModule, NoopAnimationsModule, MatDialogModule ],
      declarations: [ UpcomingVacationsComponent, PlaceComponent, CharCountPipe, MyUnlessDirective ]
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
