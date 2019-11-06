import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { Place } from '../../models'
import { ConfirmationModalComponent } from '../../../modals'

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

  places: Place[] = [
    new Place({
      id: 1,
      name: 'Portugal vacation',
      description: 'Best place to go if you dislike winter',
      country: 'Portugal',
      city: 'Lisbon',
      imageId: 'lisbon',
      averagePrice: 2000,
    }),
    new Place({
      id: 2,
      name: 'Beautiful Rome',
      description: 'Wining & Dining adventure',
      country: 'Italy',
      city: 'Rome',
      imageId: 'rome',
      averagePrice: 2500,
    }),
    new Place({
      id: 3,
      name: 'Senna Boat trip in France',
      description: 'Romantic excursion',
      country: 'France',
      city: 'Paris',
      image: 'https://www.smartertravel.com/uploads/2018/03/paris-shutterstock-1400x500.jpg',
      averagePrice: 3500,
    }),
  ]
  
  constructor(public dialog: MatDialog) {
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
