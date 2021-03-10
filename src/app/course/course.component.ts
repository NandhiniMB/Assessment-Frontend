import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import {Course} from '../models/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  courses : Array<Course>;
  constructor(private courseService : CourseService,private router:Router) { }

  ngOnInit(): void {
    this.courseService.getAllCourse().subscribe(resp =>{
      this.courses = resp;
      console.log(resp);
    })
  }

  assessments(id){

    let course : Course;
    course = this.courses.find(c => {
    return  c.id==id
    })
    console.log(course);
    this.router.navigate(['/home/assessments',JSON.stringify(course)])
  }



}
