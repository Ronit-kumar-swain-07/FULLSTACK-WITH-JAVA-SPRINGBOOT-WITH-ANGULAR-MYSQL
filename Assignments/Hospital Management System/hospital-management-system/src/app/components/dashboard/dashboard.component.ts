import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  totalPatients: any = 0;
  displayPatients: any = 0;

  constructor() {
    let data: any = localStorage.getItem('patients');

    if (data) {
      let patients = JSON.parse(data);

      this.totalPatients = patients.length;

      let count = 0;

      let interval = setInterval(() => {
        count++;

        this.displayPatients = count;

        if (count >= this.totalPatients) {
          clearInterval(interval);
        }
      }, 100);
    }
    setTimeout(() => {

  this.createChart();

},500);
  }

  createChart(){

  new Chart("myChart",{

    type:'pie',

    data:{

      labels:[
        'Patients',
        'Doctors',
        'Appointments',
        'Emergency'
      ],

      datasets:[{

        data:[
          this.totalPatients,
          25,
          40,
          5
        ]

      }]

    }

  });

}
}
