import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlaceComponent } from './edit-place.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PlaceComponent } from '../../components/place/place.component';
import { CharCountPipe } from 'src/app/pipes/char-count.pipe';
import { MyUnlessDirective } from 'src/app/directives/my-unless.directive';
import { EditPlaceFormComponent } from '../../components/edit-place-form/edit-place-form.component';
import { FormsModule } from '@angular/forms';

describe('EditPlaceComponent', () => {
  let component: EditPlaceComponent;
  let fixture: ComponentFixture<EditPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [ EditPlaceComponent, PlaceComponent, CharCountPipe, MyUnlessDirective, EditPlaceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
