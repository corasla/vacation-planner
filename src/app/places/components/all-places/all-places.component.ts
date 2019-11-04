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
    }),
    new Place({
      id: 2,
      name: 'Beautiful Rome',
      description: 'Wining & Dining adventure',
      country: 'Italy',
      city: 'Rome',
    }),
    new Place({
      id: 3,
      name: 'Senna Boat trip in France',
      description: 'Romantic excursion',
      country: 'France',
      city: 'Paris',
    }),
  ]
  constructor() {
    const newPlace = new Place({
        id: this.places.length + 1,
        name: 'School Of Magic',
        description: 'Some awesome imaginary place!',
        country: 'imagination land',
        city: 'Hogwarts'
    })

    this.places.push(newPlace)
  }

  deletePlace(id: number) {
    console.info('going to delete -> ', id)
  }

  ngOnInit() {
  }
}
