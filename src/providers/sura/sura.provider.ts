import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {Sura} from "../../models/sura/sura.interface";
import {Observable} from "rxjs";
import {SURAS} from "../../mocks/sura/suras.mock";

@Injectable()
export class SuraProvider {

  API_PATH="/suras/";
  constructor()
  {
  }

  createSura(sura:Sura) : string
  {
    return "";
  }


  getSuras():Observable<Sura[]>
  {
    return Observable.of(SURAS);
  }
}
