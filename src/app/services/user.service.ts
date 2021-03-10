import { Injectable } from '@angular/core';
import { User} from '../models/user';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  user : User ;

  LOGIN = "/login";
  REGISTER = "/register";
  ADMIN = "/admin";

  constructor(private http:HttpClient) { }

  public setUser(user:User){ 
    this.user = user;
    localStorage.setItem('user',JSON.stringify(this.user));
  }
  public getUser(){
    return localStorage.getItem('user');
  }

  public removeUser(){
    localStorage.removeItem('user');
  }

  public loginUserFromRemote(user: User): Observable<any>{
   return this.http.post(this.LOGIN, user);
  }
  
  public registerUserFromRemote(user: User): Observable<any> {
    return this.http.post(this.REGISTER, user);
  }

  public getAdminList(): Observable<any>{
    
    return this.http.get(this.ADMIN);
  }
}
