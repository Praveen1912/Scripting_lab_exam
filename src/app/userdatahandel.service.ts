import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from './user'

@Injectable({
  providedIn: 'root'
})
export class UserdatahandelService {

  ss:any;
  url='http://localhost:3000/'
  constructor(private _http:HttpClient) { }
  userData(mydata:User){
    
    return this._http.post<any>(this.url,mydata);

  }
}
