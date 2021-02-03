import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginUser } from '../models/loginUser.interface';
import { Organization } from '../models/Organization.interface';
import { User } from '../models/User.interface';
import {BehaviorSubject,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  private loginuser=new Subject<string>();
  public UserName$=this.loginuser.asObservable();
  constructor(private http:HttpClient) { }
  setuserData(username:string){
    this.loginuser.next(username);
    console.log("inside setuserdata "+this.loginuser)
  }
 
}
