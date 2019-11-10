import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Place } from '../../models';
import { NgForm } from '@angular/forms';
import { PlaceService } from '../../services/place.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'edit-place-form',
  templateUrl: './edit-place-form.component.html',
  styleUrls: ['./edit-place-form.component.sass']
})
export class EditPlaceFormComponent implements OnInit {
  @Input() place: Place

  @ViewChild('formRef', { static: false }) formData: NgForm

  constructor(
    private placeService: PlaceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    if (!this.place) {
      this.place = Place.createEmptyPlace()
    } else {
      this.place = new Place({
        ...this.place,
      })
    }
  }

  onClickSave() {
    if (this.formData.form.valid) {
      const data = this.formData.form.value
      
      const newData = {
        ...this.place,
        ...data
      }

      if (this.place.id) {
        this.placeService.update(newData)
      } else {
        this.placeService.addNewPlace(newData)
      }

      this.router.navigate(['..'], {relativeTo: this.activatedRoute})
    }
  }

  onClickCancel() {
    this.router.navigate(['..'], {relativeTo: this.activatedRoute})
  }
}
