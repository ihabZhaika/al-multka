import {Part} from "../../models/part/part.interface";
import {SURAS} from "../sura/suras.mock";
/**
 * Created by ihab on 7/9/17.
 */

const parts:Part[] =
  [
    {id:"1",name:"Tbark",order:2,suras:[SURAS[0],SURAS[3]]},
    {id:"2",name:"عمى",order:30,suras:[SURAS[0],SURAS[3]]},
    {id:"3",name:"جزء معين",order:5,suras:[SURAS[0],SURAS[3]]},
    {id:"4",name:"Tbark",order:2,suras:[SURAS[0],SURAS[3]]},
];
export const PARTS=parts;
