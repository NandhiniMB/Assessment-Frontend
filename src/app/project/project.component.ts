import { Component, OnInit,Input } from '@angular/core';
import {Project} from '../models/project';
import {Course} from '../models/course';
import { ProjectService } from '../services/project.service';
import { UserService } from '../services/user.service';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import { CreateProjectComponent } from '../create-project/create-project.component';
 
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() public course:Course;
  projects:Array<Project>=[];
  displayedColumns: String[] = ['id', 'name','description', 'creator', 'createdOn','participants','edit','delete'];
  dataSource = this.projects;
  userId:Number;

  constructor(private projectService:ProjectService,private userService:UserService,public dialog:MatDialog) { 
   this.userId= JSON.parse(this.userService.getUser()).id;
  }

  ngOnInit(): void {
    console.log("user"+this.userId)

    this.projectService.getUserProjects().subscribe(resp=>{
      this.projects  = resp;
      console.log(this.projects)
      this.projects = this.projects.filter(p =>{
        return p.creator.id==this.userId
      } )
      console.log(this.projects)
      })

  }

  openDialog(action,project){
    let obj ={
      project:project,
      course:this.course,
      action:action}

    this.dialog.open(CreateProjectComponent, {
      width: '330px',
      height: '400px',
      data: {
       project:project,
       course:this.course
      }
    });
  }
  createProject(action,project){

  this.openDialog(action,project)
    
  }

  onEdit(action,project){
   
    this.openDialog(action,project)

  }
  onDelete(projectId){
    this.projectService.deleteProject(projectId).subscribe(resp=>{
      console.log(resp);
    })
  }
}
