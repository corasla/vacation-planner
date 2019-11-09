import { TestBed } from '@angular/core/testing';

import { UpcomingPlacesService } from './upcoming-places.service';

describe('UpcomingPlacesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpcomingPlacesService = TestBed.get(UpcomingPlacesService);
    expect(service).toBeTruthy();
  });
});
