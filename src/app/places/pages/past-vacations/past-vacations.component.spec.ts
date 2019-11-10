import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastVacationsComponent } from './past-vacations.component';
import { PlaceComponent } from 'src/app/places/components/place/place.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatDialogModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CharCountPipe } from 'src/app/pipes/char-count.pipe';
import { MyUnlessDirective } from 'src/app/directives/my-unless.directive'
import { HttpClientModule } from '@angular/common/http';

describe('PastVacationsComponent', () => {
  let component: PastVacationsComponent;
  let fixture: ComponentFixture<PastVacationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, MatButtonModule, MatInputModule, NoopAnimationsModule, MatDialogModule, HttpClientModule ],
      declarations: [ PastVacationsComponent, PlaceComponent, CharCountPipe, MyUnlessDirective ]
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
