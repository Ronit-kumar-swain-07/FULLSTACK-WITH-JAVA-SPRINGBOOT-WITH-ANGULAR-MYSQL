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

      localStorage.setItem('role', 'patient');
      this.router.navigate(['/patient-dashboard']);
    }

    else{

      alert("Invalid Patient ID or Password");

    }

  }

}