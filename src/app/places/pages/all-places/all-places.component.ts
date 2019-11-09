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

    setTimeout(() => {
      const newPlace = new Place({
        name: 'Barcelona adventure',
        description: 'Great place to visit & feast on some Paella',
        country: 'Spain',
        city: 'Barcelona',
        image: 'https://ihg.scene7.com/is/image/ihg/kimpton-barcelona-1700x750-v2',
        averagePrice: 1800,
      })
      this.placeService.addNewPlace(newPlace)
    }, 500)
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

  ngOnInit() {
  }

  ngOnDestroy() {
    this._subscriptions.forEach(sub => sub.unsubscribe())
  }
}
