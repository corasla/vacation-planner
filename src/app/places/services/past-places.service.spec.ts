import { TestBed } from '@angular/core/testing';

import { PastPlacesService } from './past-places.service';
import { HttpClientModule } from '@angular/common/http';

describe('PastPlacesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
  }));

  it('should be created', () => {
    const service: PastPlacesService = TestBed.get(PastPlacesService);
    expect(service).toBeTruthy();
  });
});
