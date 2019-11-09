import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlaceFormComponent } from './edit-place-form.component';
import { PlaceComponent } from '../place/place.component';
import { FormsModule } from '@angular/forms';
import { CharCountPipe } from 'src/app/pipes/char-count.pipe';
import { MyUnlessDirective } from 'src/app/directives/my-unless.directive';
import { CommonModule } from '@angular/common';
import { PlaceService } from '../../services/place.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditPlaceFormComponent', () => {
  let component: EditPlaceFormComponent;
  let fixture: ComponentFixture<EditPlaceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, CommonModule, RouterTestingModule],
      declarations: [ EditPlaceFormComponent, PlaceComponent, CharCountPipe, MyUnlessDirective ],
      providers: [PlaceService]
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
