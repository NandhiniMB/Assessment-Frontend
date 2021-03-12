import { Component, OnInit,Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Project} from '../models/project';
import { User } from '../models/user';
import { UserProject } from '../models/UserProject';
import { UserService } from '../services/user.service';
import {ProjectService} from '../services/project.service';
import { Course } from '../models/course';

@Component({
  selector: 'app-submit-project',
  templateUrl: './submit-project.component.html',
  styleUrls: ['./submit-project.component.scss']
})
export class SubmitProjectComponent implements OnInit {

  
  project : Project = new Project();
  user:User;
  userProject : UserProject =new UserProject();
  file:File;
  course:Course;
  constructor(@Inject(MAT_DIALOG_DATA) public obj,private projectService: ProjectService,private userService:UserService) {
   
   }
 
  ngOnInit(): void {
    this.project = this.obj.project;
    this.user = JSON.parse(this.userService.getUser());
    this.course=this.obj.course;
  }

  onFileChanged(event){
    this.file = event.target.files[0];
    console.log(this.file);
  }

  onUpload(){
    
    this.userProject.project =this.project;
    this.userProject.user = this.user;
    this.userProject.course = this.project.course;
    console.log(this.userProject);
    const _formData = new FormData();
    _formData.append('file',this.file);
    _formData.append('userProject',new Blob([JSON.stringify(this.userProject)],{type:"application/json"}));


  
  _formData.forEach((key,value)=>{
    console.log(key);
  })



this.projectService.saveUserProject(_formData).subscribe(resp=>{
  console.log(resp);
})
  }
}
