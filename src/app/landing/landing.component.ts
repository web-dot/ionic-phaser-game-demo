import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {

  uniqueNames: string[];

  constructor() { }

  ngOnInit() {
    this.uniqueNames = JSON.parse(localStorage.getItem('gamenames')) || [];
    console.log(this.uniqueNames);
  }

  loginForm = new FormGroup({
    gameName: new FormControl()
  });

  onSubmit(){
    console.log(this.loginForm.value);
       if(this.uniqueNames.length==0){
        this.uniqueNames.push(this.loginForm.value.gameName);
        localStorage.setItem('gamenames', JSON.stringify(this.uniqueNames));
       }
       else{
         this.uniqueNames.forEach(name=>{
           if(name==this.loginForm.value.gameName){
             console.log("cant do");
           }
           else{
            this.uniqueNames.push(this.loginForm.value.gameName);
            localStorage.setItem('gamenames', JSON.stringify(this.uniqueNames));
           }
         })
       }
  }

}
