import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { OrganizationComponent } from './organization/organization.component';
import { DocumentsComponent } from './documents/documents.component';
import { AccountsComponent } from './accounts/accounts.component';
import { InspectionComponent } from './inspection/inspection.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ExperienceComponent } from './experience/experience.component'
import { FullCalendarModule } from '@fullcalendar/angular'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 
FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    UserLoginComponent,
    OrganizationComponent,
    DocumentsComponent,
    AccountsComponent,
    InspectionComponent,
    ExperienceComponent,
  

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
   
  ]
  ,
  exports: [
    UserLoginComponent, 
    OrganizationComponent,
    DocumentsComponent,
    AccountsComponent,
    InspectionComponent
    ]
})
export class LoginModule { }
