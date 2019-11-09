import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlaceFormComponent } from './edit-place-form.component';
import { PlaceComponent } from '../place/place.component';
import { FormsModule } from '@angular/forms';
import { CharCountPipe } from 'src/app/pipes/char-count.pipe';
import { MyUnlessDirective } from 'src/app/directives/my-unless.directive';
import { CommonModule } from '@angular/common';

describe('EditPlaceFormComponent', () => {
  let component: EditPlaceFormComponent;
  let fixture: ComponentFixture<EditPlaceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, CommonModule],
      declarations: [ EditPlaceFormComponent, PlaceComponent, CharCountPipe, MyUnlessDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlaceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
