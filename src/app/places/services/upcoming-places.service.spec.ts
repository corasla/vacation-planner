import { TestBed } from '@angular/core/testing';

import { UpcomingPlacesService } from './upcoming-places.service';
import { HttpClientModule } from '@angular/common/http';

describe('UpcomingPlacesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
  }));

  it('should be created', () => {
    const service: UpcomingPlacesService = TestBed.get(UpcomingPlacesService);
    expect(service).toBeTruthy();
  });
});
