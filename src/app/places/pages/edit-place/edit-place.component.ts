import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlaceService } from '../../services/place.service';
import { Place } from '../../models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-place',
  templateUrl: './edit-place.component.html',
  styleUrls: ['./edit-place.component.sass']
})
export class EditPlaceComponent implements OnInit, OnDestroy {
  selectedPlace: Place = null
  selectedPlaceId: number = - 1
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
              this.selectedPlace = allPlaces.find(p => +p.id === +this.selectedPlaceId)
            })
          )
        }
      })
    )
  }

  ngOnInit() {
  }

  onClickSave() {
  }

  onClickCancel() {
    
  }

  ngOnDestroy() {
    this.placeService.inEditMode = false
    this._subscriptions.forEach(sub => sub.unsubscribe())
  }
}
