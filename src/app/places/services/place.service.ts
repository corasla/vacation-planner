import { Injectable } from '@angular/core';
import { Place } from '../models';

import { BehaviorSubject } from 'rxjs'
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  static FIREBASE_URL = 'https://vacation-planner-ecd82.firebaseio.com'
  allPlaces$: BehaviorSubject<Place[]>
  inEditMode = false

  allPlacesData: Array<Place> = []
  constructor(
    private http: HttpClient
  ) {
    this.allPlaces$ = new BehaviorSubject(this.allPlacesData)
    this.getPlaces()
  }

  addNewPlace(place: Place) {
    this.http.post(`${PlaceService.FIREBASE_URL}/places.json`, {
      place: {
        ...place,
      }
    }).subscribe((successResponse: {name: string}) => {
      this.allPlacesData = [...this.allPlacesData, {...place, id: successResponse.name}]
      this.allPlaces$.next(this.allPlacesData)
    }, (errorResponse) => {
      console.error('some error occured when adding a new place -> ', errorResponse)
    })
  }

  deletePlace(placeId: string) {
    this.http.delete(`${PlaceService.FIREBASE_URL}/places/${placeId}.json`).subscribe(() => {
      this.allPlacesData = [...this.allPlacesData.filter(p => p.id !== placeId)]
      this.allPlaces$.next(this.allPlacesData)

      this.getPlaces()
    })
  }

  markAsGoingToVisit(place: Place) {
    if (place.markedForVisit || place.markedAsVisited) {
      return
    }
    place.markedForVisit = true
    this.update(place)
  }

  update(place: Place) {
    const placeIndex = this.allPlacesData.findIndex(p => p.id === place.id)
    this.http.put(`${PlaceService.FIREBASE_URL}/places/${place.id}.json`, {
      place,
    }).subscribe(() => {
      this.allPlacesData.splice(placeIndex, 1, place)
      this.allPlaces$.next(this.allPlacesData)
    })
  }

  getPlaces() {
    this.http.get(`${PlaceService.FIREBASE_URL}/places.json`)
      .pipe(map((responseData) => {
        const parsedPlacesData = Object.keys(responseData).map((key => {
          const newPlace = new Place({
            ...responseData[key].place,
            id: key,
          })

          return newPlace
        }))

        return parsedPlacesData
      }))
      .subscribe((parsedResponseData) => {
        this.allPlacesData = parsedResponseData
        this.allPlaces$.next(this.allPlacesData)
      })
  }
}








// new Place({
//   name: 'Portugal vacation',
//   description: 'Best place to go if you dislike winter',
//   country: 'Portugal',
//   city: 'Lisbon',
//   imageId: 'lisbon',
//   averagePrice: 2000,
// }),
// new Place({
//   name: 'Beautiful Rome',
//   description: 'Wining & Dining adventure',
//   country: 'Italy',
//   city: 'Rome',
//   imageId: 'rome',
//   averagePrice: 2500,
// }),
// new Place({
//   name: 'Senna Boat trip in France',
//   description: 'Romantic excursion',
//   country: 'France',
//   city: 'Paris',
//   image: 'https://www.smartertravel.com/uploads/2018/03/paris-shutterstock-1400x500.jpg',
//   averagePrice: 3500,
// }),
// new Place({
//     name: 'Barcelona adventure',
//     description: 'Great place to visit & feast on some Paella',
//     country: 'Spain',
//     city: 'Barcelona',
//     image: 'https://ihg.scene7.com/is/image/ihg/kimpton-barcelona-1700x750-v2',
//     averagePrice: 1800,
//   })