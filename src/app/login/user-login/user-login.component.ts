import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User.interface';
import { UserserviceService } from '../userservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { loginUser } from 'src/app/models/loginUser.interface';
import { ShareDataService } from '../shareData.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
  providers: [UserserviceService,ShareDataService]
})
export class UserLoginComponent implements OnInit {

  requesteduser!: User;
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })
  get f() { return this.loginForm.controls }

  loggeduser: loginUser = {
    username: "",
    password: ""

  }
  constructor(private sharedata:ShareDataService,private userservice: UserserviceService, private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit(): void {
  }


 
  // login function
  login() {
    
    console.log("inside login")
    let response = this.userservice.userLoginService(this.loggeduser);
    response.subscribe(data => {
      localStorage.setItem("currentuser", this.loggeduser.username);
      console.log("inside login")
      this.requesteduser = data;
      console.log("user verified")
      if (this.requesteduser.registrationType == "individual") {
        
        alert("login sucessfully")
        this.goToIndividual()
      }
      else if (this.requesteduser.registrationType == "organization") {
        alert("login sucessfully")
        this.goToOrganization()
      }
    }
      ,
      error => {
        alert(error.message);
      }
    )

  }
  goToIndividual() {
    this.router.navigate(['/documents'])
  }
  goToOrganization() {
    this.router.navigate(['/organization'])
  }
}

