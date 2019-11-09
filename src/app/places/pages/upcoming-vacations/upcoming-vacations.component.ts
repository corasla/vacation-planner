import { Component, OnInit, OnDestroy } from '@angular/core';
import { UpcomingPlacesService } from '../../services/upcoming-places.service';

import { Place } from 'src/app/places/models'

@Component({
  selector: 'upcoming-vacations',
  templateUrl: './upcoming-vacations.component.html',
  styleUrls: ['./upcoming-vacations.component.sass']
})
export class UpcomingVacationsComponent implements OnInit, OnDestroy {
  places: Place[] = []
  _subscriptions = []
  constructor(
    private upcomingPlacesService: UpcomingPlacesService,
  ) {
    this._subscriptions.push(
      this.upcomingPlacesService.allPlaces$.subscribe((places: Place[]) => {
        this.places = places
      })
    )
  }

  unmarkPlaceAsUpcoming(place: Place) {
    this.upcomingPlacesService.removeFromUpcoming(place)
  }

  markPlaceAsVisited(place: Place) {
    this.upcomingPlacesService.markedAsVisited(place)
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._subscriptions.forEach(sub => sub.unsubscribe())
  }
}

