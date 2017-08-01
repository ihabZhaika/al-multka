import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {AngularFireDatabase} from "angularfire2/database/database";
import {Course} from "../../models/course/course.interface";
import {Observable} from "rxjs";
import {COURSES} from "../../mocks/course/courses.mock";

@Injectable()
export class CourseProvider {

  API_PATH="/courses/";

  constructor(private database:AngularFireDatabase)
  {
  }


  getCourses():Observable<Course[]>
  {
    return Observable.of(COURSES);
  }
  createUser(course:Course) : string
  {
    return this.database.list(this.API_PATH).push(course).key;
  }
  async getCourse(id)
  {
    return this.database.object(`${this.API_PATH}/${id}`);
  }


}
