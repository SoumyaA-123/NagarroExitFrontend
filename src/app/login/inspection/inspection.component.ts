import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareDataService } from '../shareData.service';
import { UserserviceService } from '../userservice.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Time } from '@angular/common';
// import * as EventEmitter from 'events';
@Component({
  selector: 'app-inspection',
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.scss'],
  providers:[UserserviceService,ShareDataService]
})
export class InspectionComponent implements OnInit {
  // @Output
  // backtoaccounts = new EventEmitter<boolean>();
  // backto(){
  //   this.backtoaccounts.emit();
  // }
  loggeduser :string="";
  inspectionform:FormGroup=new FormGroup({
    date:new FormControl(''),
    time: new FormControl(''),
    userId: new FormControl('')
  })
  inputDate!:Date;
  inputTime!:Time;
  username!:any;
  constructor(private sharedata:ShareDataService,private userservice :UserserviceService,private route:ActivatedRoute,private router:Router) { }
  
  ngOnInit(): void {
    
    console.log(localStorage.getItem("currentuser"))
    

  }
  responsedata!:any;
  saveInspection(){
    this.username=localStorage.getItem("currentuser");
    let response=this.userservice.saveAppointmentService(this.inputDate,this.inputTime,this.username)
    response.subscribe(data=>{
      this.responsedata=data;
      console.log(this.responsedata)
      alert("appointment fixed");

    },
    error=>{
      alert(error.message)
    })
  }
  LastRegister(){
   window.alert("Congratulation!! your All steps Completed");
    this.router.navigate(['/login'])
  }
  
}
