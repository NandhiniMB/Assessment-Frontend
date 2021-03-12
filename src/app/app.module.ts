import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material//expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { CourseComponent } from './course/course.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { ProjectComponent } from './project/project.component';
import { QuizComponent } from './quiz/quiz.component';
import { McqComponent } from './mcq/mcq.component';
import { ViewAssessmentComponent } from './view-assessment/view-assessment.component';
import { TakeMcqComponent } from './take-mcq/take-mcq.component';
import { CreateMcqComponent } from './create-mcq/create-mcq.component';
import { ScoreComponent } from './score/score.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { SubmitProjectComponent } from './submit-project/submit-project.component';
import { ParticipantComponent } from './participant/participant.component';
import { SnackbarComponent } from './snackbar/snackbar.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MainComponent,
    MenuComponent,
    CourseComponent,
    AssessmentComponent,
    QuizComponent,
    McqComponent,
    ViewAssessmentComponent,
    TakeMcqComponent,
    CreateMcqComponent,
    ScoreComponent,
    ProjectComponent,
    CreateProjectComponent,
    SubmitProjectComponent,
    ParticipantComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatRadioModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    MatDialogModule,
    MatGridListModule,
    MatExpansionModule,
    MatStepperModule,
    BrowserAnimationsModule,
  ],
  entryComponents:[CreateProjectComponent,SubmitProjectComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
