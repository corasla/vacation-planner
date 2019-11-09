import { Injectable } from '@angular/core';
import { Place } from '../models';

import { BehaviorSubject } from 'rxjs'
import { PastPlacesService } from './past-places.service';

@Injectable({
  providedIn: 'root'
})
export class UpcomingPlacesService {
  allPlaces$: BehaviorSubject<Place[]>
  allPlacesData: Array<Place> = []

  constructor(
    private pastPlacesService: PastPlacesService
  ) {
    this.allPlaces$ = new BehaviorSubject(this.allPlacesData)
  }

  addNewPlace(place: Place) {
    this.allPlacesData = [...this.allPlacesData, place]
    this.allPlaces$.next(this.allPlacesData)
  }

  markAsVisited(place: Place) {
    place.markAsVisited = true
    this.pastPlacesService.addNewPlace(place)
  }

  deletePlace(placeId: number) {
    this.allPlacesData = [...this.allPlacesData.filter(p => p.id !== placeId)]
    this.allPlaces$.next(this.allPlacesData)
  }
}
