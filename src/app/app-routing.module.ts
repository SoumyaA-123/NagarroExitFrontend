import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './about/home/home.component';
import { AccountsComponent } from './login/accounts/accounts.component';
import { DocumentsComponent } from './login/documents/documents.component';
import { ExperienceComponent } from './login/experience/experience.component';
import { InspectionComponent } from './login/inspection/inspection.component';
import { OrganizationComponent } from './login/organization/organization.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { UserSignupComponent } from './signup/user-signup/user-signup.component';

const routes: Routes = [
  {
    path:'login',
    component:UserLoginComponent
  },
  {
    path:'signup',
    component:UserSignupComponent
  },
  {
    path:'inspection',
    component:InspectionComponent
  },
  {
    path:'documents',
    component : DocumentsComponent
  },
  {
    path:'experience',
    component : ExperienceComponent
  },
  {
    path:'organization',
    component: OrganizationComponent
  },
  {
    path:'accounts',
    component:AccountsComponent
  },
  {
    path:'**',
    component:HomeComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
