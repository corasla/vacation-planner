import { Injectable } from '@angular/core';
import { Place } from '../models';

import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  allPlaces$: BehaviorSubject<Place[]>
  lastIdUsed = 2

  allPlacesData: Array<Place> = [
    new Place({
      id: 0,
      name: 'Portugal vacation',
      description: 'Best place to go if you dislike winter',
      country: 'Portugal',
      city: 'Lisbon',
      imageId: 'lisbon',
      averagePrice: 2000,
    }),
    new Place({
      id: 1,
      name: 'Beautiful Rome',
      description: 'Wining & Dining adventure',
      country: 'Italy',
      city: 'Rome',
      imageId: 'rome',
      averagePrice: 2500,
    }),
    new Place({
      id: 2,
      name: 'Senna Boat trip in France',
      description: 'Romantic excursion',
      country: 'France',
      city: 'Paris',
      image: 'https://www.smartertravel.com/uploads/2018/03/paris-shutterstock-1400x500.jpg',
      averagePrice: 3500,
    }),
  ]
  constructor() {
    this.allPlaces$ = new BehaviorSubject(this.allPlacesData)
  }

  addNewPlace(place: Place) {
    this.lastIdUsed++
    this.allPlacesData = [...this.allPlacesData, {...place, id: this.lastIdUsed}]
    this.allPlaces$.next(this.allPlacesData)
  }

  deletePlace(placeId: number) {
    this.allPlacesData = [...this.allPlacesData.filter(p => p.id !== placeId)]
    this.allPlaces$.next(this.allPlacesData)
  }
}
