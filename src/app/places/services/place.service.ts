import { Injectable } from '@angular/core';
import { Place } from '../models';

import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  allPlaces$: Subject<Place[]> = new Subject()

  allPlacesData: Array<Place> = [
    new Place({
      id: 1,
      name: 'Portugal vacation',
      description: 'Best place to go if you dislike winter',
      country: 'Portugal',
      city: 'Lisbon',
      imageId: 'lisbon',
      averagePrice: 2000,
    }),
    new Place({
      id: 2,
      name: 'Beautiful Rome',
      description: 'Wining & Dining adventure',
      country: 'Italy',
      city: 'Rome',
      imageId: 'rome',
      averagePrice: 2500,
    }),
    new Place({
      id: 3,
      name: 'Senna Boat trip in France',
      description: 'Romantic excursion',
      country: 'France',
      city: 'Paris',
      image: 'https://www.smartertravel.com/uploads/2018/03/paris-shutterstock-1400x500.jpg',
      averagePrice: 3500,
    }),
  ]
  constructor() {
    this.allPlaces$.next(this.allPlacesData)
  }

  addNewPlace(place: Place) {
    this.allPlacesData = [...this.allPlacesData, place]
    this.allPlaces$.next(this.allPlacesData)
  }
}
