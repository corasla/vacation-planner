import { Injectable } from '@angular/core';
import { Place } from '../models';

import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PastPlacesService {
  allPlaces$: BehaviorSubject<Place[]>

  allPlacesData: Array<Place> = []
  constructor() {
    this.allPlaces$ = new BehaviorSubject(this.allPlacesData)
  }

  addNewPlace(place: Place) {
    this.allPlacesData = [...this.allPlacesData, place]
    this.allPlaces$.next(this.allPlacesData)
  }

  deletePlace(placeId: number) {
    this.allPlacesData = [...this.allPlacesData.filter(p => p.id !== placeId)]
    this.allPlaces$.next(this.allPlacesData)
  }
}
