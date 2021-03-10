import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../models/course';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  course:Course;
  ngOnInit(): void {
    this.course = JSON.parse(this.route.snapshot.params['course']);
  }

}
