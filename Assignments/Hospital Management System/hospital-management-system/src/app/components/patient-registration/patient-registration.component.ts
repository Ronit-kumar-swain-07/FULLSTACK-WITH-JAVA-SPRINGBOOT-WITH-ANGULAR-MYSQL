import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css'],
})
export class PatientRegistrationComponent {
  name: any;
  age: any;
  disease: any;
  searchText: any = '';
  editIndex: any = -1;

  constructor() {
    let data = localStorage.getItem('patients');

    if (data) {
      this.patients = JSON.parse(data);
    }
  }

  patients: any[] = [
    {
      name: 'Rahul',
      age: 22,
      disease: 'Fever',
    },

    {
      name: 'Aman',
      age: 30,
      disease: 'Diabetes',
    },

    {
      name: 'Priya',
      age: 25,
      disease: 'Cold',
    },
  ];

  addPatient() {
    if (this.editIndex == -1) {
      let newPatient = {
        name: this.name,
        age: this.age,
        disease: this.disease,
      };

      this.patients.push(newPatient);
    } else {
      this.patients[this.editIndex] = {
        name: this.name,
        age: this.age,
        disease: this.disease,
      };

      this.editIndex = -1;
    }
    localStorage.setItem('patients', JSON.stringify(this.patients));

    this.name = '';
    this.age = '';
    this.disease = '';
  }

  deletePatient(index: number) {
    this.patients.splice(index, 1);
    localStorage.setItem('patients', JSON.stringify(this.patients));
  }

  editPatient(index: number) {
    this.name = this.patients[index].name;

    this.age = this.patients[index].age;

    this.disease = this.patients[index].disease;

    this.editIndex = index;
  }
}
