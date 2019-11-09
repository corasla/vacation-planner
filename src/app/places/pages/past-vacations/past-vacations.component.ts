import { Component, OnInit } from '@angular/core';
import { UpcomingPlacesService } from '../../services/upcoming-places.service';

import { Place } from 'src/app/places/models'
import { PastPlacesService } from '../../services/past-places.service';

@Component({
  selector: 'past-vacations',
  templateUrl: './past-vacations.component.html',
  styleUrls: ['./past-vacations.component.sass']
})
export class PastVacationsComponent implements OnInit {
  places: Place[] = []
  constructor(
    private pastPlacesService: PastPlacesService
  ) {
    this.pastPlacesService.allPlaces$.subscribe((places: Place[]) => {
      this.places = places
    })
  }

  unmarkPlaceAsVisited(place: Place) {
    this.pastPlacesService.removeFromVisited(place)
  }

  ngOnInit() {
  }
}

