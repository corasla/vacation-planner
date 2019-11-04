import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  EventEmitter,
  Output
} from '@angular/core';

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

  @Output() requestDelete: EventEmitter<any> = new EventEmitter()

  initialDataBindOnly = 'Synced only on initial component init'
  initialAndDataBind = 'always in sync with my input and vice-versa!'

  constructor() { }

  ngOnInit() {
    console.log('inited comp Place -> ', this.name)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('some changes -> ', changes)
  }

  clickedRemove(event) {
    console.log('user clicked remove', event)
    this.requestDelete.emit(this.id)
  }
  
  clickedEdit(event) {
    console.log('user clicked edit', event)
  }
  
  ngOnDestroy() {
    console.log('destroying component Place -> ', this.name)
  }

  // onMouseOver() {
  //   console.log('over')
  // }

  // onMouseOut() {
  //   console.log('out')
  // }
}
