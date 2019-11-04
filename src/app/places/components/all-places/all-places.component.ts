import { Component, OnInit } from '@angular/core';
import { Place } from '../../models'

@Component({
  selector: 'all-places',
  templateUrl: './all-places.component.html',
  styleUrls: ['./all-places.component.sass']
})
export class AllPlacesComponent implements OnInit {
  places: Place[] = [
    new Place({
      id: 1,
      name: 'Portugal vacation',
      description: 'Best place to go if you dislike winter',
      country: 'Portugal',
      city: 'Lisbon',
      imageId: 'lisbon',
    }),
    new Place({
      id: 2,
      name: 'Beautiful Rome',
      description: 'Wining & Dining adventure',
      country: 'Italy',
      city: 'Rome',
      imageId: 'rome',
    }),
    new Place({
      id: 3,
      name: 'Senna Boat trip in France',
      description: 'Romantic excursion',
      country: 'France',
      city: 'Paris',
      image: 'https://www.smartertravel.com/uploads/2018/03/paris-shutterstock-1400x500.jpg',
    }),
  ]
  constructor() {
    const newPlace = new Place({
        id: this.places.length + 1,
        name: 'Barcelona adventure',
        description: 'Great place to visit & feast on some Paella',
        country: 'Spain',
        city: 'Barcelona',
        image: 'https://ihg.scene7.com/is/image/ihg/kimpton-barcelona-1700x750-v2'
    })

    this.places.push(newPlace)
  }

  deletePlace(id: number) {
    console.info('going to delete -> ', id)
  }

  ngOnInit() {
  }
}
