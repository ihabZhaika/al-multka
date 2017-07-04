import { Component } from '@angular/core';

@Component({
  selector: 'place',
  templateUrl: 'place.component.html'
})
export class PlaceComponent {

  text: string;

  constructor() {
    console.log('Hello PlaceComponent Component');
    this.text = 'Hello World';
  }

}
