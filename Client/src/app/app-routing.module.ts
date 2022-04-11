import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './mentors/components/login/login.component';
import { MentorsFormComponent } from './mentors/components/mentors-form/mentors-form.component';
import { MentorsViewComponent } from './mentors/components/mentors-view/mentors-view.component';
import { SignupComponent } from './mentors/components/signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'view', component: MentorsViewComponent },
  { path: 'add', component: MentorsFormComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
