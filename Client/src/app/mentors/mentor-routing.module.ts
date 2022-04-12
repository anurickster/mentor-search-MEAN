import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorsFormComponent } from './components/mentors-form/mentors-form.component';
import { MentorsViewComponent } from './components/mentors-view/mentors-view.component';

const routes: Routes = [
  { path: 'view', component: MentorsViewComponent },
  { path: 'add', component: MentorsFormComponent },
  { path: 'add:id', component: MentorsFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class MentorRoutingModule {}
