import { Component } from '@angular/core';

@Component({
  selector: 'app-prescription-management',
  templateUrl: './prescription-management.component.html',
  styleUrls: ['./prescription-management.component.css']
})
export class PrescriptionManagementComponent {

  // ✅ form model
  prescription = {
    patientName: '',
    doctorName: '',
    medicines: '',
    advice: ''
  };

  // ✅ message
  message: string = '';

  // ✅ save function
  savePrescription() {

    // validation
    if (!this.prescription.patientName || !this.prescription.doctorName) {
      this.message = "⚠️ Please fill required fields";
      return;
    }

    // success message
    this.message = "💊 Prescription Saved Successfully!";

    // reset form
    this.prescription = {
      patientName: '',
      doctorName: '',
      medicines: '',
      advice: ''
    };

    // auto hide message
    setTimeout(() => {
      this.message = '';
    }, 3000);
  }

}