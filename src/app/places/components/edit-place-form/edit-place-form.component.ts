import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Place } from '../../models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'edit-place-form',
  templateUrl: './edit-place-form.component.html',
  styleUrls: ['./edit-place-form.component.sass']
})
export class EditPlaceFormComponent implements OnInit {
  @Output() save: EventEmitter<Place> = new EventEmitter()
  @Output() cancel: EventEmitter<any> = new EventEmitter()
  @Input() place: Place

  @ViewChild('formRef', { static: true }) formData: NgForm

  constructor() { }

  ngOnInit() {
  }

  onClickSave() {
    if (this.formData.form.valid) {
      const data = this.formData.form.value
      
      console.log('saving -> ', data)

      this.save.emit({
        ...this.place,
        ...data,
      })
    }
  }

  onClickCancel() {
    this.cancel.emit()
  }
}
