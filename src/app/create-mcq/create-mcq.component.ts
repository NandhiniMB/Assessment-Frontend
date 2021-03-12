import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute, Router} from '@angular/router';
import { Course } from '../models/course';
import { mcq } from '../models/mcq';
import { Question } from '../models/question';
import { McqService } from '../services/mcq.service';
import { UserService } from '../services/user.service';
import {SnackbarComponent} from '../snackbar/snackbar.component';

@Component({
  selector: 'app-create-mcq',
  templateUrl: './create-mcq.component.html',
  styleUrls: ['./create-mcq.component.scss']
})
export class CreateMcqComponent implements OnInit {

  question: Array<FormGroup>=[];
  mcqObj:mcq =new mcq();
  questions:Array<Question>=[];
  // option1:String;
  // option2:String;
  noOfQuestions:Number=10;
  constructor(private router : Router ,private snackBar: MatSnackBar,private formBuilder:FormBuilder,private mcqService:McqService,private userService:UserService,private route:ActivatedRoute) { }
  course:Course;
  ngOnInit(): void {

    console.log(this.noOfQuestions);
    this.course = JSON.parse(this.route.snapshot.params['course']);
    console.log(this.course);

    for(let i=0;i<this.noOfQuestions;i++){

      this.question.push(this.formBuilder.group({
        question: ['', Validators.required],
        option1 : ['',Validators.required],
        option2 : ['',Validators.required],
        answer : ['',Validators.required],
      }));
      

    }
    
    
  }

  addQuestion(i){
    
    // console.log(this.question.value);
     this.questions[i]=this.question[i].value
    // this.option1='';
    // this.option2='';
   
  }

  saveAll(){
    console.log(this.questions);
    this.mcqObj.course=this.course;
    this.mcqObj.creator = JSON.parse(this.userService.getUser());
    this.mcqService.saveMCQ(this.questions,this.mcqObj).subscribe(resp=>{
    console.log(resp)
    this.openSnackBar();
    this.router.navigate(['/home/assessments',JSON.stringify(this.course)])
 },error => {
   console.log(error);
 })
  }


  onChange(event){
  
    console.log(event.value);
    this.noOfQuestions = Number(event.value)+1;
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration:  5000,
    });
  }

}
