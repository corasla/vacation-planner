import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.sass']
})
export class PlaceComponent implements OnInit {
  @Input() name: string
  @Input() description: string
  @Input() country: string
  @Input() city: string

  constructor() { }

  ngOnInit() {
  }

}
