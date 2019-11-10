import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlaceService } from '../../services/place.service';
import { Place } from '../../models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-place',
  templateUrl: './view-place.component.html',
  styleUrls: ['./view-place.component.sass']
})
export class ViewPlaceComponent implements OnInit, OnDestroy {
  selectedPlace: Place = null
  selectedPlaceId: string = null
  _subscriptions = []
  constructor(
    private placeService: PlaceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.placeService.inEditMode = true
    this._subscriptions.push(
      this.activatedRoute.params.subscribe(params => {
        if (params.id) {
          this.selectedPlaceId = params.id
          this._subscriptions.push(
            this.placeService.allPlaces$.subscribe(allPlaces => {
              this.selectedPlace = allPlaces.find(p => p.id == this.selectedPlaceId)
            })
          )
        }
      })
    )
  }

  ngOnInit() {
  }

  onClickEdit() {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute})
  }

  ngOnDestroy() {
    this.placeService.inEditMode = false
    this._subscriptions.forEach(sub => sub.unsubscribe())
  }
}
