import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {Pupil} from "../../models/pupil/pupil.interface";
import {BaseProvider} from "../base-provider";
@Injectable()
export class PupilProvider extends BaseProvider
{

  constructor(public http: Http)
  {
    super(http,'pupils');
  }


}
