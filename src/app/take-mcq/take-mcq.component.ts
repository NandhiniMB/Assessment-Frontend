import { Component, OnInit } from '@angular/core';
import { McqService } from '../services/mcq.service';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';
import {mcq} from '../models/mcq';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../models/question';
import { UserService } from '../services/user.service';
import { UserMcq } from '../models/UserMcq';


@Component({
  selector: 'app-take-mcq',
  templateUrl: './take-mcq.component.html',
  styleUrls: ['./take-mcq.component.scss']
})
export class TakeMcqComponent implements OnInit {

  id:Number; //mcq id
  question:Array<Question>;
  answer:FormGroup;
  answers:Array<any>=[];
  mcq:mcq=new mcq();
  userId:Number;
  UserMcq : UserMcq=new UserMcq();
  constructor(private mcqService: McqService,private route : ActivatedRoute,private formBuilder:FormBuilder,private userService:UserService) {
    
   }

  
  ngOnInit(): void {

    this.answer = this.formBuilder.group({
      answerCtrl :  new FormControl(),
    });
    
    this.mcqService.getMCQ().subscribe(resp=>{
      this.mcq= resp.find(r=>{
        console.log(r.id);
        console.log(this.id);
        return r.id == this.id})
      })

    this.userId = JSON.parse(this.userService.getUser());
    this.id =Number(this.route.snapshot.paramMap.get('id'));
  
    console.log(this.id)
    this.mcqService.getQuestions(this.id).subscribe(resp => {
      this.question = resp;
      console.log(this.question);
    })

   
  }

  saveAll(){

    let length = this.question.length;  
    var weightage  = 100/length;
    this.UserMcq.score = 0;
    this.question.forEach((q,i) =>{
      if(q.answer == q.option1 && "option1" == this.answers[i].answerCtrl)
       {
        this.UserMcq.score  = this.UserMcq.score + weightage;
       }
      else if(q.answer == q.option2 && "option2" == this.answers[i].answerCtrl)
       {
        this.UserMcq.score  = this.UserMcq.score  + weightage;
       }
    })

    this.UserMcq.mcq= this.mcq;
    this.UserMcq.user = JSON.parse(this.userService.getUser());
    this.mcqService.updateUserMcq(this.UserMcq).subscribe(resp=>{
 console.log(resp);
    })

  }

  saveAnswer(ind){
    
    this.answers[ind]=this.answer.value;
    console.log(this.answer.value);
  }





}
