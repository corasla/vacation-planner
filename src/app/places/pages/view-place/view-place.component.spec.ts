import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlaceComponent } from './view-place.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PlaceComponent } from '../../components/place/place.component';
import { CharCountPipe } from 'src/app/pipes/char-count.pipe';
import { MyUnlessDirective } from 'src/app/directives/my-unless.directive';

describe('ViewPlaceComponent', () => {
  let component: ViewPlaceComponent;
  let fixture: ComponentFixture<ViewPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ViewPlaceComponent, PlaceComponent, CharCountPipe, MyUnlessDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
