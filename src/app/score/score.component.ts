import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { UserMcq } from '../models/UserMcq';
import { UserProject } from '../models/UserProject';
import { McqService } from '../services/mcq.service';
import { UserService } from '../services/user.service';
import {ProjectService} from '../services/project.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  user_mcq_list:Array<UserMcq>=[];
  user_project_list:Array<UserProject>=[];
  userId:number;
  constructor(private mcqService:McqService,private projectService: ProjectService, private userService:UserService) { }

  ngOnInit(): void {


  this.userId = JSON.parse(this.userService.getUser()).id;
  this.mcqService.getUserMcq(this.userId).subscribe(resp=>{
    this.user_mcq_list = resp;
    console.log(this.user_mcq_list);
  })

  this.projectService.getAllUserProjects().subscribe(resp=>{
    this.user_project_list = resp;
    console.log(this.user_project_list);
    this.user_project_list = this.user_project_list.filter(r=>{
      return r.user.id= this.userId;
    })
  })
  }



}
