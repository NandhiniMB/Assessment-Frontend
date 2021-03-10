import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {User} from '../models/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  
    passwordFormControl = new FormControl(null, [
      Validators.required,
      
    ]);
  
    user: User = new User();
    email: String;
    message: String = '';
  
    constructor(private router:Router, private userService :UserService) { }
  
    ngOnInit(): void {
    }
  
    loginUser() {

      
        this.userService.loginUserFromRemote(this.user).subscribe(
          data => { 
            this.user=data;
            console.log("Response Received"+this.user.email);
            console.log("Response Received"+this.user.id);
            
            this.userService.setUser(this.user);
            this.router.navigate(['/home']);
  
          },
          error => {
            this.message = "Bad Credentials! Please try again with correct credentials!";
            console.log("Exception Occurred");
          }
        );
  
    }
  
    registerUser(){
      this.router.navigate(['/reg']);
      // console.log("navigated to register page");
    }
  
    openDialog(): void {
      // const dialogRef = this.dialog.open(ForgotPasswordComponent, {
      //   width: '300px',
      //   data: {email: this.email}
      // });
    
      // dialogRef.afterClosed().subscribe(result => {
      //   console.log('The dialog was closed');
      //   this.email = result;
      // });
    }
  
  }
  