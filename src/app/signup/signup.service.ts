import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from '../../app/models/User.interface'
//import { Observable } from 'rxjs/Observable';
@Injectable({
    providedIn:'root',
})
export class SignupService{

    constructor(private http: HttpClient) {
       
    }
  
    //private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    public saveUser(user : User){
        console.log("inside user")
        return this.http.post<User>("http://localhost:9090/user",user)
    }
}
