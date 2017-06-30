import {Exam} from "./exam.interface";
import {Sura} from "../sura/sura.interface";
/**
 * Created by ihab on 6/30/17.
 */
export interface SuraExam extends Exam
{
  suras:Sura
}
