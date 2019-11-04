import { Component, OnInit } from '@angular/core';
import { Place } from '../../models'

@Component({
  selector: 'all-places',
  templateUrl: './all-places.component.html',
  styleUrls: ['./all-places.component.sass']
})
export class AllPlacesComponent implements OnInit {
  places: Place[] = [
    {
      name: 'Portugal vacation',
      description: 'Best place to go if you dislike winter',
      country: 'Portugal',
      city: 'Lisbon',
    },
    {
      name: 'Beautiful Rome',
      description: 'Wining & Dining adventure',
      country: 'Italy',
      city: 'Rome',
    },
    {
      name: 'Senna Boat trip in France',
      description: 'Romantic excursion',
      country: 'France',
      city: 'Paris',
    },
  ]
  constructor() {
    const newPlace = new Place('School Of Magic', 'Some awesome imaginary place!', 'imagination land', 'Hogwarts')

    this.places.push(newPlace)
  }

  deletePlace(id: number) {
    console.info('going to delete -> ', id)
  }

  ngOnInit() {
  }
}
