import { TestBed } from '@angular/core/testing';

import { PastPlacesService } from './past-places.service';

describe('PastPlacesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PastPlacesService = TestBed.get(PastPlacesService);
    expect(service).toBeTruthy();
  });
});
