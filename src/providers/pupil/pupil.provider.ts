import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {Pupil} from "../../models/pupil/pupil.interface";
import {PUPILS} from "../../mocks/pupil/pupils.mock";

/*
  Generated class for the PupilProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PupilProvider {

  constructor(public http: Http) {
    console.log('Hello PupilProvider Provider');
  }


  getPupils():Observable<Pupil[]>
  {
    return Observable.of(PUPILS);
  }
}
