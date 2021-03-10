import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpErrorResponse} from  '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { Question } from '../models/question';
import { UserMcq } from '../models/UserMcq';



@Injectable({
  providedIn: 'root'
})
export class McqService {
 
  

  SAVE_MCQ = '/mcq/save';
  GET_MCQ = "/mcq/";
  QUESTIONS = "/mcq/quest";
  UPDATE_USER_MCQ = "/usermcq/";
  GET_USER_MCQ= "/usermcq";
  GET_ALL_USER_MCQ= "/usermcq";
  DELETE_MCQ="/mcq/";
  constructor(private http: HttpClient) { }

  public saveMCQ(questions,mcq):Observable<any>{
    //  console.log("here"+questions)
    //  console.log(JSON.stringify(questions));
    var obj={questions,mcq};
    console.log(obj);
    return this.http.post(this.SAVE_MCQ,obj);
  }

  public getMCQ():Observable<any>{
    return this.http.get(this.GET_MCQ);
  }

  public getQuestions(id):Observable<any> {
    return this.http.get(this.QUESTIONS+'/'+id).pipe(catchError(this.handleError))
    
  }

  public updateUserMcq(UserMcq:UserMcq):Observable<any>{
    return this.http.post(this.UPDATE_USER_MCQ,UserMcq);
  }

  public deleteMcq(id: any) {
    return this.http.delete(this.DELETE_MCQ+'/'+id);
  }
  
  public getUserMcq(userId):Observable<any> {
    return this.http.get(this.GET_USER_MCQ+'/'+userId);
  }

  public getAllUserMcq():Observable<any> {
    return this.http.get(this.GET_ALL_USER_MCQ);
  }

  handleError(error:HttpErrorResponse){
     return throwError(error);
  }


}
