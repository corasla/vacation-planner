import { Component, OnInit, OnDestroy } from '@angular/core';

import { Place } from 'src/app/places/models'
import { PastPlacesService } from '../../services/past-places.service';

@Component({
  selector: 'past-vacations',
  templateUrl: './past-vacations.component.html',
  styleUrls: ['./past-vacations.component.sass']
})
export class PastVacationsComponent implements OnInit, OnDestroy {
  places: Place[] = []
  _subscriptions = []
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
  
  ngOnDestroy() {
    this._subscriptions.forEach(sub => sub.unsubscribe())
  }
}

