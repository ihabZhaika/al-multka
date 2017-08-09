import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {AngularFireDatabase} from "angularfire2/database/database";
import {Course} from "../../models/course/course.interface";
import {Observable} from "rxjs";
import {COURSES} from "../../mocks/course/courses.mock";
import {BaseProvider} from "../base-provider";
import {Http} from "@angular/http";

@Injectable()
export class CourseProvider extends  BaseProvider
{
  constructor(http:Http)
  {
    super(http,'courses');
  }

}
