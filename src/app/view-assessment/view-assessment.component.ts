import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { mcq } from '../models/mcq';
import {Project} from '../models/project';
import { McqService } from '../services/mcq.service';
import {ProjectService} from '../services/project.service';
import {CreateProjectComponent} from '../create-project/create-project.component';
import { SubmitProjectComponent } from '../submit-project/submit-project.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SnackbarComponent} from '../snackbar/snackbar.component';

@Component({
  selector: 'app-view-assessment',
  templateUrl: './view-assessment.component.html',
  styleUrls: ['./view-assessment.component.scss']
})
export class ViewAssessmentComponent implements OnInit {

  constructor(private snackBar: MatSnackBar,private mcqService: McqService,private projectService : ProjectService, private router:Router,private dialog:MatDialog) { }
  mcq : Array<mcq>;
  projects :Array<Project>;
  ngOnInit(): void {
    this.mcqService.getMCQ().subscribe(resp => {
      this.mcq=resp;
      console.log(this.mcq);
    })
    this.projectService.getUserProjects().subscribe(resp=>{
      this.projects = resp;
    })
  }

  takeAssessment(id)
  {

    this.router.navigate(['/home/takemcq',id])
    
  }

  

  viewDesc(project)
  {
    this.dialog.open(CreateProjectComponent, {
      width: '330px',
      height: '400px',
      data: {
       project:project,
       action:"view"
      }
    });
  }

  submitProject(project)
  {
    const dialogRef =this.dialog.open(SubmitProjectComponent,{
      width: '600px',
      height: '200px',
      data:{
        project:project
      }
    })


    dialogRef.afterClosed().subscribe(() => {
      // Do stuff after the dialog has closed
    this.openSnackBar();
  });
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration:  5000,
    });
  }
}
