import {
  Component,
  OnInit,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
  ContentChild
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
  @Input() image: string
  @Input() imageId: string
  @Input() averagePrice: number

  @Output() requestDelete: EventEmitter<any> = new EventEmitter()

  @ViewChild('inputElementRef', {static: false}) inputElementReference: ElementRef
  @ContentChild('allPlacesInputRef', {static: true}) inputElementFromParentComponent: ElementRef

  initialDataBindOnly = 'Synced only on initial component init'
  initialAndDataBind = 'always in sync with my input and vice-versa!'

  constructor() { }

  ngOnInit() {
    console.warn('my input ref -> ', this.inputElementReference)
    console.warn('my EXTERNAL input ref value -> ', this.inputElementFromParentComponent)
    console.log('inited comp Place -> ', this.name)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('some changes -> ', changes)
  }

  clickedRemove(event) {
    // console.log('user clicked remove', event)
    this.requestDelete.emit(this.id)
  }
  
  clickedEdit(event) {
    // console.log('user clicked edit', event)
    console.log('my input ref value -> ', this.inputElementReference.nativeElement.value)
    console.log('my EXTERNAL input ref value -> ', this.inputElementFromParentComponent.nativeElement.value)
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
