import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges
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

  initialDataBindOnly = 'Synced only on initial component init'
  initialAndDataBind = 'always in sync with my input and vice-versa!'

  constructor() { }

  ngOnInit() {
    console.log('inited comp Place -> ', this.name)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('some changes -> ', changes)
  }

  ngOnDestroy() {
    console.log('destroying component Place -> ', this.name)
  }
}
