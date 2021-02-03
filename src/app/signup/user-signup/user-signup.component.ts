import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { SignupService } from '../signup.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/User.interface';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss'],
  providers: [SignupService]
})
export class UserSignupComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    salutation: new FormControl('', ),
    firstName: new FormControl('', ),
    middleName: new FormControl('',),
    lastName: new FormControl('', ),
    houseNumber: new FormControl('', ),
    streetName: new FormControl('', ),
    area: new FormControl('', ),
    city: new FormControl('', ),
    state: new FormControl('', ),
    landMark: new FormControl('', ),
    country: new FormControl('', ),
    phoneNumber: new FormControl('', ),
    email: new FormControl('', [ Validators.email]),
    alternatePhoneNumber: new FormControl(''),
    alternateEmail: new FormControl('', ),
    registrationType: new FormControl('',[Validators.required] ),
    taxID: new FormControl('', ),
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  })
  requestdata!: User;
  user: User = {
    salutation: "",
    firstName: "",
    middleName: "",
    lastName: "",
    houseNo: "",
    streetName: "",
    area: "",
    city: "",
    state: "",
    landMark: "",
    country: "",
    phoneNumber: 0,
    email: "",
    alternateNumber: 0,
    alternateEmail: "",
    registrationType: "",
    taxId: "",
    userId: "",
    password: "",
    isEnable:false,
    organizationId:0,
    UserDocuments:0,
    inspectionId:0,
    experienceId:0,
    accountId:0
  }
  constructor(private signupservice: SignupService,private route:ActivatedRoute,private router:Router) {

  //   private route: ActivatedRoute, 
  //   private router: Router, 
  //     private userService: UserService) {
  // this.user = new User();


  }


  ngOnInit(): void {
    console.log(this.registerForm);
  }
  resetForm() {
    this.registerForm.reset();
  }
  hasError(controlName: string, errorType: string) {
    const control = this.registerForm.get(controlName)
    if (control && control.touched) {
      return control.getError(errorType)
    }

    return false;
  }
  get f() { return this.registerForm.controls; }
  errormessage:any;
  submitForm() {
    console.log(this.f.password.value +" "+this.f.confirmPassword.value)
    if (this.f.password.value === this.f.confirmPassword.value) {
      console.log("ïnside submit")
      let response = this.signupservice.saveUser(this.user)
      response.subscribe(data => {
        this.requestdata = data;
        console.log("data is submitted in database"+this.requestdata.userId)
        alert("Please Confirm your Registration ....Mail has been sent to your this mail id" +" "+this.requestdata.userId );
        this.goToLogin();
      },
      error=>{
        alert("user exist with this email id"+ error.message)
      
      }
      )
    }else{
     alert("password should match")
    }


  }
  goToLogin(){
    this.router.navigate(['/login'])
  }
  
}
