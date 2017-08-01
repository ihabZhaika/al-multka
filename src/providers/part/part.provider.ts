import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {Observable} from "rxjs";
import {Part} from "../../models/part/part.interface";
import {PARTS} from "../../mocks/part/parts.mock";

@Injectable()
export class PartProvider {

  API_PATH="/suras/";
  constructor()
  {
  }

  createPart(part:Part) : string
  {
    return "";
  }

  getParts():Observable<Part[]>
  {
    return Observable.of(PARTS);
  }
}
