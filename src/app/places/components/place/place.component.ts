import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  EventEmitter,
  Output,
} from '@angular/core';

import { Subject } from 'rxjs'

@Component({
  selector: 'place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.sass']
})
export class PlaceComponent implements OnInit, OnChanges, OnDestroy {
  @Input() name: string
  @Input() description: string
  @Input() country: string
  @Input() city: string
  @Input() id: number
  @Input() image: string
  @Input() imageId: string
  @Input() averagePrice: number

  @Output() requestDelete: EventEmitter<any> = new EventEmitter()

  initialDataBindOnly = 'Synced only on initial component init'
  initialAndDataBind = 'always in sync with my input and vice-versa!'

  averagePriceObservable = new Subject<any>()

  constructor() { }

  ngOnInit() {
    console.log('inited comp Place -> ', this.name)

    setTimeout(() => {
      this.averagePriceObservable.next(this.averagePrice - (Math.ceil(Math.random() * 190)))
    }, Math.random() * 3200)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('some changes -> ', changes)
  }

  clickedRemove(event) {
    this.requestDelete.emit(this.id)
  }
  
  clickedEdit(event) {
  }
  
  ngOnDestroy() {
    console.log('destroying component Place -> ', this.name)
  }
}
