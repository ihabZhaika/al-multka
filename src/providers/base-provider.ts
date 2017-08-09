import {Observable} from "rxjs";
import {Http , Headers , URLSearchParams , RequestOptions} from "@angular/http";
import {BACKEND_CONFIG} from "../config/backend.config";
/**
 * Created by ihab on 8/5/17.
 */

export class BaseProvider
{
  protected OPTIONS;
  protected HEADER;
  protected API_URL;
  constructor(public http: Http,apiPath:string)
  {
    this.API_URL = `${BACKEND_CONFIG.SERVER_URL}/${apiPath}`;
    this.HEADER = new Headers();
    this.HEADER.append('Content-Type', 'application/json');
    this.OPTIONS={headers:this.HEADER};
  }
  getAll():Observable<[any]>
  {
    return this.http.get(this.API_URL,this.OPTIONS).map(response=>response.json());

  }
  insert(model:any):Observable<any>
  {
    return this.http.post(this.API_URL,model,this.OPTIONS).map(response=>response.json());

  }
  getById(id:String):Observable<any>
  {
    return this.http.get(this.API_URL,this.OPTIONS).map(response=>response.json());

  }
  updateById(id:string, model:any):Observable<any>
  {
    return this.http.put(`${this.API_URL}/${id}`,model,this.OPTIONS).map(response=>response.json());

  }
  removeByIds(ids:string[]):Observable<{ok:number,n:number}>
  {

    let options:RequestOptions = new RequestOptions();
    options.headers = this.HEADER;
    let params:URLSearchParams = new URLSearchParams();
    ids.forEach((objectId)=>
                {
                  params.append("id",objectId);

                });
    options.params =params;
    return this.http.delete(this.API_URL,options).map(response=>response.json());

  }


}
