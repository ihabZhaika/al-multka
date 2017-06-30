import {Question} from "./question.interface";
/**
 * Created by ihab on 6/30/17.
 */
export interface Exam
{
  title:string;
  mark:number;
  questions:Question[];
}
