import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import {Observable} from "rxjs";
import {BaseProvider} from "../base-provider";
import {Http,URLSearchParams,RequestOptions} from "@angular/http";
import {Pupil} from "../../models/pupil/pupil.interface";

@Injectable()
export class CourseProvider extends  BaseProvider
{
  PUPILS="pupils";
  ATTENDANCES="attendances";
  SUPERVISORS="supervisors";
  constructor(http:Http)
  {
    super(http,'courses');
  }

  public getAllPupils(courseId:string):Observable<Pupil[]>
  {
    return this.http.get(`${this.API_URL}/${courseId}/${this.PUPILS}`,this.OPTIONS).map(response=>response.json());
  }


  insertPupil(model:any):Observable<any>
  {
    return this.http.post(`${this.API_URL}/${this.PUPILS}`,model._id,this.OPTIONS).map(response=>response.json());

  }
  // getPupilById(courseId:string, pupilId:String):Observable<any>
  // {
  //   return this.http.get(`${this.API_URL}/${courseId}/${this.PUPILS}/${pupilId}`,this.OPTIONS).map(response=>response.json());
  //
  // }
  updatePupilById(courseId:string,pupilId:string, model:any):Observable<any>
  {
    return this.http.put(`${this.API_URL}/${courseId}/${this.PUPILS}/${pupilId}`,model,this.OPTIONS).map(response=>response.json());

  }
  removePupilsByIds(courseId:string,ids:string[]):Observable<{ok:number,n:number}>
  {

    let options:RequestOptions = new RequestOptions();
    options.headers = this.HEADER;
    let params:URLSearchParams = new URLSearchParams();
    ids.forEach((objectId)=>
                {
                  params.append("id",objectId);

                });
    options.params =params;
    return this.http.delete(`${this.API_URL}/${courseId}/${this.PUPILS}`,options).map(response=>response.json());

  }


}
