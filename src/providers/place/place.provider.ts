import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs";
import {Place} from "../../models/place/place.interface";
import {PLACES} from "../../mocks/place/places.mock";
import {BackandService} from "@backand/angular2-sdk/src/backand.service";

@Injectable()
export class PlaceProvider {

  MODEL="place";
  constructor(public http: Http,private backand:BackandService)
  {
    console.log('Hello PlaceProvider Provider');
  }

  getPlaces():Observable<Place[]>
  {
    return Observable.of(PLACES);
  }
  savePlace(place:Place)
  {
    return this.backand.object.create(this.MODEL,place);
  }

}
