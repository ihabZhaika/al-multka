import { Component } from '@angular/core';

/**
 * Generated class for the PupilComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'pupil',
  templateUrl: 'pupil.html'
})
export class PupilComponent {

  text: string;

  constructor() {
    console.log('Hello PupilComponent Component');
    this.text = 'Hello World';
  }

}
