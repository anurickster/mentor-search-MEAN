import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MentorsFormComponent } from './mentors/components/mentors-form/mentors-form.component';
import { MentorsViewComponent } from './mentors/components/mentors-view/mentors-view.component';
import { NavigationBarComponent } from './mentors/components/navigation-bar/navigation-bar.component';
import { LoginComponent } from './mentors/components/login/login.component';
import { SignupComponent } from './mentors/components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    MentorsFormComponent,
    MentorsViewComponent,
    NavigationBarComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
