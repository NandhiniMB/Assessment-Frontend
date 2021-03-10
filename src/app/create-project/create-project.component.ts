import { Component, OnInit ,Inject,Optional} from '@angular/core';
import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';
import { UserService } from '../services/user.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Course } from '../models/course';

export interface DialogData {
  course:Course;
  project :Project;
}
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

 
  project:Project;
  course:Course;
  action:String;
  constructor(private projectService:ProjectService,private userService:UserService, 
     @Optional() @Inject(MAT_DIALOG_DATA) public obj) {
  
      // console.log(obj);
      // console.log(obj.obj);
      // console.log({...obj});
      // console.log(Object.keys(obj))

    //var local={...obj}
  //  console.log(this.obj);
   
    this.project=this.obj.project;
    console.log(this.project);
    this.course=this.obj.course;
     console.log(this.course);
    // this.action = this.obj.action;
    this.action=this.obj.action;

   }
   
  
  ngOnInit(): void {
    
  }

  saveProject(){
   
    this.project.creator=  JSON.parse(this.userService.getUser());
    this.project.course=this.course;
    this.projectService.saveProject(this.project).subscribe(resp =>{
     console.log(resp);
    })
  }
}
