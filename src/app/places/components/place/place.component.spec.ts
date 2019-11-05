import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceComponent } from './place.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CharCountPipe } from 'src/app/pipes/char-count.pipe';

describe('PlaceComponent', () => {
  let component: PlaceComponent;
  let fixture: ComponentFixture<PlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, MatButtonModule, MatInputModule, NoopAnimationsModule ],
      declarations: [ PlaceComponent, CharCountPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
