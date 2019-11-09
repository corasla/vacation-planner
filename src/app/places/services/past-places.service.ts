import { Injectable } from '@angular/core';
import { Place } from '../models';

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { PlaceService } from './place.service';

@Injectable({
  providedIn: 'root'
})
export class PastPlacesService {
  allPlaces$: Observable<Place[]>
  constructor(
    private placeService: PlaceService,
  ) {
    this.allPlaces$ = this.placeService.allPlaces$.pipe(
      map(places => {
        return places.filter(place => place.markedAsVisited === true)
      })
    )
  }

  removeFromVisited(place: Place) {
    place.markedAsVisited = false
    place.markedForVisit = true
    this.placeService.update(place)
  }
}
