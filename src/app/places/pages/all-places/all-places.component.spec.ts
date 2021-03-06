import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlacesComponent } from './all-places.component';
import { PlaceComponent } from 'src/app/places/components/place/place.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatDialogModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CharCountPipe } from 'src/app/pipes/char-count.pipe';
import { MyUnlessDirective } from 'src/app/directives/my-unless.directive'
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('AllPlacesComponent', () => {
  let component: AllPlacesComponent;
  let fixture: ComponentFixture<AllPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, MatButtonModule, MatInputModule, NoopAnimationsModule, MatDialogModule, RouterTestingModule, HttpClientModule ],
      declarations: [ AllPlacesComponent, PlaceComponent, CharCountPipe, MyUnlessDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
