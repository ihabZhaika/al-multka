import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {Http} from "@angular/http";
import {BaseProvider} from "../base-provider";

@Injectable()
export class SuraProvider extends BaseProvider
{

  constructor(http:Http)
  {
    super(http,'suras');
  }

}
