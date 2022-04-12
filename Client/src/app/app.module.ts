import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthRoutingModule } from './auth/auth-routing.module';
import { AppComponent } from './app.component';
import { MentorsFormComponent } from './mentors/components/mentors-form/mentors-form.component';
import { MentorsViewComponent } from './mentors/components/mentors-view/mentors-view.component';
import { NavigationBarComponent } from './shared/navigation-bar/navigation-bar.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { MentorRoutingModule } from './mentors/mentor-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MentorsFormComponent,
    MentorsViewComponent,
    NavigationBarComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AuthRoutingModule,
    MentorRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
