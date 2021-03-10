import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {CourseComponent} from './course/course.component';
import { AssessmentComponent } from './assessment/assessment.component';
import {ViewAssessmentComponent} from './view-assessment/view-assessment.component';
import { TakeMcqComponent } from './take-mcq/take-mcq.component';
import {CreateMcqComponent} from '../app/create-mcq/create-mcq.component';
import {ScoreComponent} from '../app/score/score.component';
import {ParticipantComponent} from '../app/participant/participant.component';

const routes: Routes = [ 
{ path: 'log', pathMatch: "full", component: LoginComponent },
{ path: 'reg', pathMatch: "full", component: RegisterComponent },
{
  path: 'home', component: MainComponent,
  children: [
  { path: '', pathMatch: "full", component: ViewAssessmentComponent },
  { path: 'course', pathMatch: "full", component: CourseComponent },
  { path: 'assessments/:course' , pathMatch:"full", component:AssessmentComponent},
   {path : 'takemcq/:id',pathMatch:"full", component:TakeMcqComponent},
   {path : 'createmcq/:course',pathMatch:"full", component:CreateMcqComponent},
   {path : 'score',pathMatch:"full", component:ScoreComponent},
   {path : 'part/:id',pathMatch:"full", component:ParticipantComponent},
   {path : 'partpro/:id',pathMatch:"full", component:ParticipantComponent}

  ]
}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
