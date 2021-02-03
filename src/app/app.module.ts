import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { UiToolbarComponent } from './ui-toolbar/ui-toolbar.component';
import { SignupModule } from './signup/signup.module';
import { NavTogglerDirective } from './nav-toggler.directive';
import { AboutModule } from './about/about.module';
import { SignupService } from './signup/signup.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserserviceService } from './login/userservice.service';
import { ShareDataService } from './login/shareData.service';





@NgModule({
  declarations: [
    AppComponent,
    UiToolbarComponent,
    NavTogglerDirective,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SignupModule,
    AboutModule,
    FormsModule,
    HttpClientModule,
  
  
    
  ],
  providers: [SignupService,UserserviceService,ShareDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
