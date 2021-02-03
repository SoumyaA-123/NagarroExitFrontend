import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { loginUser } from 'src/app/models/loginUser.interface';
import { SaveDocuments } from 'src/app/models/SaveDocuments.interface';
import { ShareDataService } from '../shareData.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
  providers: [UserserviceService,ShareDataService]
})
export class DocumentsComponent implements OnInit {
  
  loggeduser: any="";
  adharFile!: File;
  taxIdsFile!: File;
  responsedata:any;
  documentForm:FormGroup=new FormGroup({
    adhar: new FormControl('',[Validators.required]),
    taxIds: new FormControl('',[Validators.required]),
    userId: new FormControl()
  })
 
  constructor(private sharedata:ShareDataService,private userservice: UserserviceService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    console.log(localStorage.getItem("currentuser"))
    console.log("hii there")
  }

  onAdharSelect(event: any){
      this.adharFile=event.target.files[0]
    // this.documentForm.get('adhar')?.setValue(this.currentFile);
  }
  
  onTaxIdsSelect(event: any){
    this.taxIdsFile=event.target.files[0]
    // this.documentForm.get('taxIds')?.setValue(this.selectedFilesTaxid);

  }

  submitDocuments() {
    this.loggeduser=localStorage.getItem("currentuser");
    this.userservice.saveDocumentsService(this.adharFile,this.taxIdsFile,this.loggeduser).subscribe(data=>{
      this.responsedata=data;
      console.log(data);
      alert("file uploaded sucessfully");
    })
    this.router.navigate(['/accounts'])
  }
  next(){
    this.router.navigate(['/accounts'])
  }
  cancel() {
    this.documentForm.reset();

  }
}
