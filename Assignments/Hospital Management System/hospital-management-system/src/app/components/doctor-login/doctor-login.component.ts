import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})

export class DoctorLoginComponent {

  doctorid:any;
  password:any;

  constructor(private router:Router){}

  login(){

    if(this.doctorid=="doctor" && this.password=="1234"){

      alert("Doctor Login Successful");

      localStorage.setItem('role', 'doctor');
      this.router.navigate(['/doctor-dashboard']);

    }

    else{

      alert("Invalid Doctor ID or Password");

    }

  }

}