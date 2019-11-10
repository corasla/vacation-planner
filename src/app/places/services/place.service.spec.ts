import { TestBed } from '@angular/core/testing';

import { PlaceService } from './place.service';
import { HttpClientModule } from '@angular/common/http';

describe('PlaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
  }));

  it('should be created', () => {
    const service: PlaceService = TestBed.get(PlaceService);
    expect(service).toBeTruthy();
  });
});
