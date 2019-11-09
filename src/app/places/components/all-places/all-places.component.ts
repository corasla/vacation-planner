import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { Place } from '../../models'
import { ConfirmationModalComponent } from '../../../modals'
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'all-places',
  templateUrl: './all-places.component.html',
  styleUrls: ['./all-places.component.sass']
})
export class AllPlacesComponent implements OnInit {
  @ViewChild('secondDialog', {static:false}) secondDialog: TemplateRef<MatDialog>
  pendingDeletionId = null
  pendingDeletionPlaceName: string
  dialog2Ref: MatDialogRef<any>

  places: Place[] = []
  
  constructor(
    public dialog: MatDialog,
    private placeService: PlaceService
  ) {
    this.places = this.placeService.getPlaces()
    
    const newPlace = new Place({
      id: this.places.length + 1,
      name: 'Barcelona adventure',
      description: 'Great place to visit & feast on some Paella',
      country: 'Spain',
      city: 'Barcelona',
      image: 'https://ihg.scene7.com/is/image/ihg/kimpton-barcelona-1700x750-v2',
      averagePrice: 1800,
    })

    this.places.push(newPlace)
  }

  deletePlace(id: number) {
    console.info('going to delete -> ', id)
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      width: '300px',
      data: {
        id,
        name: this.places.find(p => p.id === id).name,
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('Confirmed removing -> ', result);
    });

    this.pendingDeletionId = id
    this.pendingDeletionPlaceName = this.places.find(p => p.id === id).name,
    this.dialog2Ref = this.dialog.open(this.secondDialog, {
      width: '300px',
    })
  }


  // second type of modal - template modal
  onCancelDialog() {
    this.dialog2Ref.close()
    console.log('dialog was canceled')
    this.pendingDeletionId = null
  }

  onConfirmDialog() {
    this.dialog2Ref.close()
    console.log(`going to delete ${this.pendingDeletionId}`)
  }

  ngOnInit() {
  }
}
