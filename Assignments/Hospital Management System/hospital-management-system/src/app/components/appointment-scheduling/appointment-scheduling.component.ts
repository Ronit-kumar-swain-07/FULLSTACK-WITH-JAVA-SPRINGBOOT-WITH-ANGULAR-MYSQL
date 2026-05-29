import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-scheduling',
  templateUrl: './appointment-scheduling.component.html',
  styleUrls: ['./appointment-scheduling.component.css']
})
export class AppointmentSchedulingComponent {

  // ✅ form data
  appointment = {
    patientName: '',
    doctorName: '',
    date: '',
    time: ''
  };

  // ✅ success/error message
  message: string = '';

  // ✅ function called on button click
  bookAppointment() {

    // validation
    if (
      !this.appointment.patientName ||
      !this.appointment.doctorName ||
      !this.appointment.date ||
      !this.appointment.time
    ) {
      this.message = "⚠️ Please fill all fields";
      return;
    }

    // success message
    this.message = "✅ Appointment Booked Successfully!";

    // reset form
    this.appointment = {
      patientName: '',
      doctorName: '',
      date: '',
      time: ''
    };

    // hide message after 3 seconds
    setTimeout(() => {
      this.message = '';
    }, 3000);
  }

}