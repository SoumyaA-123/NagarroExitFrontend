import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/models/Experience.interface';
import { loginUser } from 'src/app/models/loginUser.interface';
import { ShareDataService } from '../shareData.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  providers:[UserserviceService,ShareDataService]
})
export class ExperienceComponent implements OnInit {
 
  loggeduser :any="";
  experience:Experience={
    freeText:"",
    //documents!:File,
    user:{
      userId:""
    }
  }
  experienceform:FormGroup=new FormGroup({
    freeText: new FormControl('',[]),
    documents:new FormControl('',[]),
    userId : new FormControl('',[])
  })
  constructor(private sharedata:ShareDataService,private userservice :UserserviceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    console.log(localStorage.getItem("currentuser"))
  }
  hasError(controlName: string, errorType: string) {
    const control = this.experienceform.get(controlName)
    if (control && control.touched) {
      return control.getError(errorType)
    }

    return false;
  }
  currentFile!: File;
  onDocumentSelect(event :any){
    this.currentFile=event.target.files[0]
    // this.experienceform.get("documents")?.setValue(this.currentFile);
  }
  responseobject:any;
  saveExperience(){
    this.loggeduser=localStorage.getItem("currentuser");
    let response=this.userservice.saveExperienceService(this.currentFile,this.experience.freeText,this.loggeduser);
    response.subscribe(data=>{
      this.responseobject=data;
      console.log(this.responseobject)
      alert("details saved!!!");
    },
    error=>{
      alert(error.message)
    })
    this.router.navigate(['/inspection'])
  }
  next(){
    this.router.navigate(['/inspection'])
  }

  cancel(){
    this.experienceform.reset();
  }
}
