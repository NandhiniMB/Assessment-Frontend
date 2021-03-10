import { Component, OnInit,Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Project} from '../models/project';
import { User } from '../models/user';
import { UserProject } from '../models/UserProject';
import { UserService } from '../services/user.service';
import {ProjectService} from '../services/project.service';

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
  constructor(@Inject(MAT_DIALOG_DATA) public obj,private projectService: ProjectService,private userService:UserService) {
   
   }
 
  ngOnInit(): void {
    this.project = this.obj.project;
    this.user = JSON.parse(this.userService.getUser());
  }

  onFileChanged(event){
    this.file = event.target.files[0];
    console.log(this.file);
  }

  onUpload(){
    
    
    const _formData = new FormData();
    _formData.append('file',this.file, this.file.name);
  // console.log("here"+JSON.stringify(_formData.get("name")))

  console.log(_formData)
  _formData.forEach((key,value)=>{
    console.log(key);
  })
this.userProject.file=_formData;
this.userProject.project =this.project;
this.userProject.user = this.user;
console.log(this.userProject);
this.projectService.saveUserProject(this.userProject).subscribe(resp=>{
  console.log(resp);
})
  }
}
