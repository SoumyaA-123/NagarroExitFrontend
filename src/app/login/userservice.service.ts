import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginUser } from '../models/loginUser.interface';
import { Organization } from '../models/Organization.interface';
import { User } from '../models/User.interface';
import {Account} from '../models/Account.interface'
import { Experience } from '../models/Experience.interface';
import { Time } from '@angular/common';
import { Observable } from 'rxjs';
import { LoginModule } from './login.module';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  constructor(private http:HttpClient) { }
  private headers=new HttpHeaders({'Content-Type':'application/json'})
  private headersforfile=new HttpHeaders({
      'Content-Type' : 'multipart/text'
  })
  // user login service
  public userLoginService(user:loginUser){
        console.log("inside auth method");
        return this.http.post<User>(`${environment.apiUrl}/login`,user);

      }
  // get organization service
  public getOrganizationdetailsService(org :Organization){
    console.log("inside get org method");
    return this.http.post<Organization>(`${environment.apiUrl}/updateorganization`,org,{headers:this.headers})
  }
 // save documents
  public saveDocumentsService(adharFile:File,taxIdsfile : File,username:string):Observable<any>
  {
    console.log("inside save documents service")
    return this.http.post<any>(`${environment.apiUrl}/updateDocuments`,{adharFile,taxIdsfile,username})
  }
  // save account serivie
  public saveAccountService(accountObject:Account){
    console.log("inside save account")
    return this.http.post<Account>(`${environment.apiUrl}/updateAccount`,accountObject,{headers:this.headers})

  }
  // save experience service
  public saveExperienceService(file:File,username : string,freeText : string){
    console.log("inside save experince")
    return this.http.post<Experience>(`${environment.apiUrl}/updateExperience`,{file,username,freeText},{headers:this.headers})
  }
  // save appointment service
  public saveAppointmentService(date:Date,time:Time,username:string){
    console.log("inside appointment service")
    return this.http.post<any>(`${environment.apiUrl}/updateInspection`,{date,time,username},{headers:this.headers})
  }
  
}
