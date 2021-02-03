import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/models/Account.interface';
import { UserSignupComponent } from 'src/app/signup/user-signup/user-signup.component';
import { ShareDataService } from '../shareData.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
  providers: [UserSignupComponent, ShareDataService]
})
export class AccountsComponent implements OnInit {
  loggeduser: string = "";
  responseobject: any;
  accountObject: Account = {
    accountNumber: 0,
    ifscCode: "",
    alternateAccountNumber: 0,
    alternateIfscCode: "",
    nomineeName: "",
    nomineeRelation: "",
    nomineeNumber: 0,
    nomineeEmail: "",
    nomineeHouseNo: "",
    nomineeStreetName: "",
    nomineeArea: "",
    nomineeCity: "",
    nomineeState: "",
    nomineeCountry: "",
    nomineeLandMark: "",
    User: {
      userId: ""
    }


  }
  constructor(private sharedata: ShareDataService, private userservice: UserserviceService, route: ActivatedRoute, private router: Router) { }

  accountForm: FormGroup = new FormGroup({
    accountNumber: new FormControl('', [Validators.required]),
    ifscCode: new FormControl('', [Validators.required]),
    alternateAccountNumber: new FormControl('', [Validators.required]),
    alternateIfscCode: new FormControl('', [Validators.required]),
    nomineeName: new FormControl('', [Validators.required]),
    nomineeRelation: new FormControl('', []),
    nomineeNumber: new FormControl('', []),
    nomineeEmail: new FormControl('', []),
    nomineeHouseNo: new FormControl('', []),
    nomineeStreetName: new FormControl('', []),
    nomineeArea: new FormControl('', []),
    nomineeCity: new FormControl('', []),
    nomineeState: new FormControl('', []),
    nomineeCountry: new FormControl('', []),
    nomineeLandMark: new FormControl('', []),
    userId: new FormControl('', [])
  })
  ngOnInit(): void {
    console.log(localStorage.getItem("currentuser"))
  }
  hasError(controlName: string, errorType: string) {
    const control = this.accountForm.get(controlName)
    if (control && control.touched) {
      return control.getError(errorType)
    }

    return false;
  }
 
  saveAccounts() {
    this.accountForm.controls.userId.setValue(localStorage.getItem("currentuser"))
    let resposne = this.userservice.saveAccountService(this.accountObject);
    resposne.subscribe(data => {
      this.responseobject = data;
      
      console.log(this.responseobject)
      alert("account details saved!!")
       this.router.navigate(['/experience'])
    },
      error => {
        alert(error.message)
      })
   

  }
  next(){
    this.router.navigate(['/experience'])

  }
  cancel() {
    this.accountForm.reset();
  }
}
