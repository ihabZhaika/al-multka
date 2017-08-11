import {Pupil} from "../pupil/pupil.interface";
import {SuraExam} from "../exam/sura-exam.interface";
import {PartExam} from "../exam/part-exam.interface";
export interface CoursePupil
{
  pupil:Pupil;
  suraExams:SuraExam[];
  partExams:PartExam[];
}
