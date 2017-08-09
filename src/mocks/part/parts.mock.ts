import {Part} from "../../models/part/part.interface";
import {SURAS} from "../sura/suras.mock";
import {ObjectId} from "../../utils/id-generator";
/**
 * Created by ihab on 7/9/17.
 */

const parts:Part[] =
  [
    {_id:ObjectId(),name:"Tbark",order:2,suras:[SURAS[0], SURAS[2]]},
    {_id:ObjectId(),name:"عمى",order:30,suras:[SURAS[1], SURAS[0]]},
    {_id:ObjectId(),name:"جزء معين",order:5,suras:[SURAS[2], SURAS[3]]},
    {_id:ObjectId(),name:"Tbark",order:7,suras:[SURAS[1], SURAS[3]]},
];
export const PARTS=parts;
