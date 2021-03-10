import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {User} from '../models/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

  export class RegisterComponent implements OnInit {
  
    user:User= new User();
    message:String;
    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
       emailDomainValidator,
    ]);
  
    passwordFormControl = new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(8),

  
    ]);
  
    usernameFormControl = new FormControl(null, [
      Validators.required,

  
    ]);
  
    nameFormControl = new FormControl(null, [
      Validators.required,
  
    ]);
  
    
  
    constructor(private router : Router, private userService : UserService)  { }
  
    ngOnInit(): void {
    }
  
    registerUser() {
      this.userService.registerUserFromRemote(this.user).subscribe(
        data => {
          console.log("Response Received");
          this.router.navigate(['/log']);
        },
        error => {
          this.message = "The Email Id already Exists!!";
          console.log("Exception Occurred");
        }
      );
    }
      
    loginUser() {
     
      this.router.navigate(['/log'])
      console.log("navigated to login page");
    }

    
  }
  function emailDomainValidator(control:FormControl ){

    console.log(control.value);
    let email = control.value || ' '; 
    let [_, domain] = email.split("@"); 
    if (domain !== "accolitedigital.com") { 
      console.log(domain);
      return {
        emailDomain: {
          parsedDomain: domain
        }
      }
  }
  return null;
  }