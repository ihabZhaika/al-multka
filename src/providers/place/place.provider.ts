import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs";
import {Place} from "../../models/place/place.interface";
import {PLACES} from "../../mocks/place/places.mock";
import {BackandService} from "@backand/angular2-sdk/src/backand.service";
import {BaseProvider} from "../base-provider";

@Injectable()
export class PlaceProvider extends BaseProvider
{

  constructor(public http: Http)
  {
    super(http,'places');
  }



}
