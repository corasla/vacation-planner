import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPlacesComponent } from './all-places.component';
import { PlaceComponent } from '../place/place.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatDialogModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CharCountPipe } from 'src/app/pipes/char-count.pipe';

describe('AllPlacesComponent', () => {
  let component: AllPlacesComponent;
  let fixture: ComponentFixture<AllPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, MatButtonModule, MatInputModule, NoopAnimationsModule, MatDialogModule ],
      declarations: [ AllPlacesComponent, PlaceComponent, CharCountPipe ]
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
