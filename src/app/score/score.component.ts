import { Component, OnInit } from '@angular/core';
import { UserMcq } from '../models/UserMcq';
import { McqService } from '../services/mcq.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  user_mcq_list:Array<UserMcq>=[];
  userId:Number;
  constructor(private mcqService:McqService,private userService:UserService) { }

  ngOnInit(): void {


  this.userId = JSON.parse(this.userService.getUser()).id;
  this.mcqService.getUserMcq(this.userId).subscribe(resp=>{
    this.user_mcq_list = resp;
    console.log(this.user_mcq_list);
  })
  }



}
