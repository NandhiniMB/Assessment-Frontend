import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  GET_USER_PROJECTS ='/project';
  SAVE_PROJECT ='/project';
  UPDATE_PROJECT ='/project';
  DELETE_PROJECT ='/project';
  SAVE_USER_PROJECT ='/userproject';
  SAVE_USER_PROJECT_SCORE ='/userproject/score';
  GET_ALL_USER_PROJECTS ='/userproject';

  
  constructor(private http:HttpClient) { }

  public getUserProjects():Observable<any>{
   return  this.http.get(this.GET_USER_PROJECTS);
  }

  public getAllUserProjects():Observable<any>{
    return  this.http.get(this.GET_ALL_USER_PROJECTS);
   }

  public saveProject(project):Observable<any>{
    return this.http.post(this.SAVE_PROJECT,project)
  }

  public updateProject(project):Observable<any>{
    return this.http.post(this.UPDATE_PROJECT,project);
  }

  public deleteProject(id: any) {
    return this.http.delete(this.DELETE_PROJECT+'/'+id);
  }

  public saveUserProject(userProject):Observable<any>{
    return this.http.post(this.SAVE_USER_PROJECT,userProject)
  }

  public saveUserProjectScore(userProject):Observable<any>{
    return this.http.post(this.SAVE_USER_PROJECT_SCORE,userProject)
  }
}
