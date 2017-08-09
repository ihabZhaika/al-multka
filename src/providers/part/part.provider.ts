import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {BaseProvider} from "../base-provider";
import {Http} from "@angular/http";

@Injectable()
export class PartProvider extends BaseProvider
{

  constructor(http:Http)
  {
    super(http,'parts');
  }


}
