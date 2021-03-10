import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { McqService } from '../services/mcq.service';
import {mcq} from '../models/mcq';
import { UserService } from '../services/user.service';
import { Course } from '../models/course';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.scss']
})
export class McqComponent implements OnInit {

  @Input() public course:Course;
  mcq:Array<mcq>=[];
  displayedColumns: String[] = ['id', 'name', 'creator', 'createdOn','participants','edit','delete'];
  
  dataSource = this.mcq;
  constructor(private route : Router,private mcqService:McqService,private userService:UserService) { }

  ngOnInit(): void {
    this.mcqService.getMCQ().subscribe(resp => {

      console.log("here");
      console.log(resp)
      this.mcq=resp.filter(m => {
        
       return (m.creator.id==JSON.parse(this.userService.getUser()).id);
      })
      console.log(this.mcq);
    })
  }
  


  createMCQ(){

    this.route.navigate(['/home/createmcq',JSON.stringify(this.course)]);

  }
  

  onDelete(id:Number){
    this.mcqService.deleteMcq(id).subscribe(resp=>{
      this.mcq = this.mcq.filter(r=> {
        return r.id!==id
      })
    })
  }

 

}
