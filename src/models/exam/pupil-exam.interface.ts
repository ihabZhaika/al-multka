import {SuraExam} from "./sura-exam.interface";
import {PartExam} from "./part-exam.interface";
/**
 * Created by ihab on 6/30/17.
 */
export interface PupilExam
{
  pupilId:string;
  suraExams:SuraExam[];
  partExams:PartExam[];
}
