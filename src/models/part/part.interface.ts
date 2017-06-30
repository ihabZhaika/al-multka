import {Sura} from "../sura/sura.interface";
/**
 * Created by ihab on 6/30/17.
 */
export interface Part
{
  name:string;
  order:number;
  suras:Sura[];
}
