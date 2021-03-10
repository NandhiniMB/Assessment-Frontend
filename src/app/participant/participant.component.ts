import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserMcq } from '../models/UserMcq';
import { McqService } from '../services/mcq.service';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit {

  participants:Array<any>=[];
  displayedColumns: String[] = ['id', 'name', 'submitteddOn','file','score'];
  
  dataSource = this.participants;

  mcqId:Number;
  constructor(private router:Router, private route : ActivatedRoute,private mcqService:McqService,private projectService:ProjectService) { }

  Title:String;
  type:String
  ngOnInit(): void {
    this.mcqId=Number(this.route.snapshot.paramMap.get('id'));
   // console.log(this.mcqId);


    console.log(this.route.snapshot.url[0].path);

    this.type=this.route.snapshot.url[0].path
    if(this.type == "part")
{
  this.mcqService.getAllUserMcq().subscribe(resp=>{
    this.participants = resp;
    
    this.Title=this.participants[0].mcq.name;
  })
}
    
else{
this.projectService.getAllUserProjects().subscribe(resp=>{
      this.participants = resp;
      console.log(this.participants);
      this.Title=this.participants[0].project.name;
    })
}
    
   
  }

}
