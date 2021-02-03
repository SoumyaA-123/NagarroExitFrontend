import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { loginUser } from 'src/app/models/loginUser.interface';
import { Organization } from 'src/app/models/Organization.interface';
import { ShareDataService } from '../shareData.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss'],
  providers:[UserserviceService,ShareDataService]
})
export class OrganizationComponent implements OnInit {
  // interface declaration
  responsedata:any;
  loggeduser:any=localStorage.getItem("currenuser");
  organization:Organization={
    licenseNumber:0,
    registeredName:"",
    OwnerShip:"",
    user:{
      userId:this.loggeduser
    }

  }
  
  // form 
  organizationForm : FormGroup=new FormGroup({
    licenseNumber: new FormControl('',[]),
    registeredName : new FormControl('',[]),
    OwnerShip : new FormControl('',[]),
    userId: new FormControl()
  })
  
     
  constructor(private sharedata:ShareDataService,private userservice: UserserviceService,private route:ActivatedRoute,private router :Router) {  
  }
  ngOnInit(): void {
    //console.log(localStorage.getItem("currentuser"))
  }
  
  hasError(controlName: string, errorType: string) {
    const control = this.organizationForm.get(controlName)
    if (control && control.touched) {
      return control.getError(errorType)
    }

    return false;
  }
  
  saveOrganizationDetails(){
    console.log(localStorage.getItem("currentuser"))
    this.organizationForm.controls.userId.setValue(localStorage.getItem("currentuser"))
    let response=this.userservice.getOrganizationdetailsService(this.organization)
    response.subscribe(data=>{
      this.responsedata=data;
      console.log(this.responsedata);
      alert("organization deatils saved")
    },
    error=>{
      alert(error.message)
    })
    this.router.navigate(['/documents'])
  }
  next(){
    this.router.navigate(['/documents']);
  }
  cancel(){
    this.organizationForm.reset();
  }
  
}
