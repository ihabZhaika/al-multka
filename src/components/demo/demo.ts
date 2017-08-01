import { Component } from '@angular/core';

/**
 * Generated class for the DemoComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'demo',
  templateUrl: 'demo.html'
})
export class DemoComponent {

  text: string;

  constructor() {
    console.log('Hello DemoComponent Component');
    this.text = 'Hello World';
  }

}
