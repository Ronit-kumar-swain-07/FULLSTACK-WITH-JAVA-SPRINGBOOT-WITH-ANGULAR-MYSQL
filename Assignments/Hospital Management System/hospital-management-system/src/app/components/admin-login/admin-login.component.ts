import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent {

  username:any;
  password:any;

  constructor(private router:Router){}

  login(){

    if(this.username=="admin" && this.password=="1234"){

      alert("Login Successful");

      this.router.navigate(['/']);

    }

    else{

      alert("Invalid Username or Password");

    }

  }

}