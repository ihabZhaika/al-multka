/**
 * Created by ihab on 7/9/17.
 */

import {Sura} from "../../models/sura/sura.interface";
import {ObjectId} from "../../utils/id-generator";
const suras:Sura[]=
  [
    {_id:ObjectId(),name:"Al-nas",description:"about the sora",order:113,versesCount:5},
   {_id:ObjectId(),name:"Al-Falaq",description:"",order:112,versesCount:6},
    {_id:ObjectId(),name:"Al-masad",description:"",order:110,versesCount:4},
    {_id:ObjectId(),name:"Sura1",description:"some description",order:50,versesCount:99},
    {_id:ObjectId(),name:"sura2",description:"",order:15,versesCount:87},
   {_id:ObjectId(),name:"Sura9999",description:"more description",order:20,versesCount:150},
  ];
export  const SURAS = suras;
