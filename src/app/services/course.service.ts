import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  COURSE = '/course';
  constructor(private http : HttpClient) { }

  public getAllCourse() : Observable<any>{
    return this.http.get(this.COURSE)
  }
  
}
