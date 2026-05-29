import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})

export class PatientLoginComponent {

  patientid:any;
  password:any;

  constructor(private router:Router) {}

  login(){

    if(this.patientid=="patient" && this.password=="1234"){

      alert("Patient Login Successful");
      this.router.navigate(['/']);
    }

    else{

      alert("Invalid Patient ID or Password");

    }

  }

}