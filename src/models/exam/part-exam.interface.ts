import {Exam} from "./exam.interface";
import {Part} from "../part/part.interface";
/**
 * Created by ihab on 6/30/17.
 */
export interface PartExam extends Exam
{
  part:Part;
}
