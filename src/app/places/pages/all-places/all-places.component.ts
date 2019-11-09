import { Component, OnInit, TemplateRef, ViewChild, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { Place } from '../../models'
import { PlaceService } from '../../services/place.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'all-places',
  templateUrl: './all-places.component.html',
  styleUrls: ['./all-places.component.sass']
})
export class AllPlacesComponent implements OnInit, OnDestroy {
  @ViewChild('templateDeleteModal', {static:false}) templateDeleteModal: TemplateRef<MatDialog>
  pendingDeletionId = null
  pendingDeletionPlaceName: string
  dialog2Ref: MatDialogRef<any>

  places: Place[] = []

  _subscriptions: Array<Subscription> = []
  
  constructor(
    public dialog: MatDialog,
    private placeService: PlaceService
  ) {
    // this.places = this.placeService.getPlaces()
    this._subscriptions.push(
      this.placeService.allPlaces$.subscribe((allPlacesArr: Place[]) => {
        this.places = allPlacesArr
      })
    )
  }

  deletePlace(id: number) {
    this.pendingDeletionId = id
    this.pendingDeletionPlaceName = this.places.find(p => p.id === id).name,
    this.dialog2Ref = this.dialog.open(this.templateDeleteModal, {
      width: '300px',
    })
  }

  // second type of modal - template modal
  onCancelDialog() {
    this.dialog2Ref.close()
    this.pendingDeletionId = null
  }

  onConfirmDialog() {
    // this may be useful when doing some request in the background but wanting immediate visual change
    // this.places = [...this.places.filter(p => p.id !== this.pendingDeletionId)]
    this.placeService.deletePlace(this.pendingDeletionId)
    this.dialog2Ref.close()
  }

  markPlaceAsUpcoming(place) {
    this.placeService.markAsGoingToVisit(place)
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._subscriptions.forEach(sub => sub.unsubscribe())
  }
}
