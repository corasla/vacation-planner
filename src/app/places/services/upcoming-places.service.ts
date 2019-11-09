import { Injectable } from '@angular/core';
import { Place } from '../models';

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { PlaceService } from './place.service';

@Injectable({
  providedIn: 'root'
})
export class UpcomingPlacesService {
  allPlaces$: Observable<Place[]>
  constructor(
    private placeService: PlaceService,
  ) {
    this.allPlaces$ = this.placeService.allPlaces$.pipe(
      map(places => {
        return places.filter(place => place.markedForVisit === true)
      })
    )
  }

  markedAsVisited(place: Place) {
    place.markedAsVisited = true
    place.markedForVisit = false
    this.placeService.update(place)
  }

  removeFromUpcoming(place: Place) {
    place.markedForVisit = false
    place.markedAsVisited = false
    this.placeService.update(place)
  }
}
