import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {

  uniqueNames: string[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.uniqueNames = JSON.parse(localStorage.getItem('gamenames')) || [];
    console.log(this.uniqueNames);
  }

  loginForm = new FormGroup({
    loginName: new FormControl()
  });

  signupForm = new FormGroup({
    signupName: new FormControl()
  });

  onLogSubmit(){
    console.log(this.loginForm.value);
    if(this.uniqueNames.length==0){
      console.log("dude says, cant do, player do not exist, signup to play")
    }
    else if(this.uniqueNames.length>0){
      this.uniqueNames.forEach(name=>{
        if(this.loginForm.value.loginName==name){
          console.log("dude says, welcome back");
        }
      })
    }
    else{
      console.log("dude says, cant do, player do not exist, signup to play")
    }
  }

  onSignSubmit(){
    console.log(this.signupForm.value)

    if(this.uniqueNames.length==0){
      this.uniqueNames.push(this.signupForm.value.signupName);
      localStorage.setItem('gamenames', JSON.stringify(this.uniqueNames));
      console.log("dude says,dude says signup successful, login to play");
    }
    else{
      this.uniqueNames.forEach(name=>{
        if(this.signupForm.value.signupName!=name){
          this.uniqueNames.push(this.signupForm.value.signupName);
          localStorage.setItem('gamenames', JSON.stringify(this.uniqueNames));
          console.log("dude says,dude says signup successful, login to play");
        }
        else{
          console.log("dude says, player exists, login to play");
        }
      })
    }
  }

}
