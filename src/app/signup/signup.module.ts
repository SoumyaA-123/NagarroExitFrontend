import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSignupComponent } from './user-signup/user-signup.component';
import {ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    UserSignupComponent,
   
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[],
  exports:[UserSignupComponent]
})
export class SignupModule { }
