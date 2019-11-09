import { Injectable } from '@angular/core';
import { Place } from '../models';

import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  allPlaces$: BehaviorSubject<Place[]>
  lastIdUsed = 2
  inEditMode = false

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
    setTimeout(() => {
      const newPlace = new Place({
        name: 'Barcelona adventure',
        description: 'Great place to visit & feast on some Paella',
        country: 'Spain',
        city: 'Barcelona',
        image: 'https://ihg.scene7.com/is/image/ihg/kimpton-barcelona-1700x750-v2',
        averagePrice: 1800,
      })
      this.addNewPlace(newPlace)
    }, 500)
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

  markAsGoingToVisit(place: Place) {
    if (place.markedForVisit || place.markedAsVisited) {
      return
    }
    place.markedForVisit = true
    this.update(place)
  }

  update(place: Place) {
    const placeId = this.allPlacesData.findIndex(p => p.id === place.id)
    this.allPlacesData.splice(placeId, 1, place)
    this.allPlaces$.next(this.allPlacesData)
  }
}
