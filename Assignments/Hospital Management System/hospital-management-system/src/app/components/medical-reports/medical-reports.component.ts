import { Component } from '@angular/core';

@Component({
  selector: 'app-medical-reports',
  templateUrl: './medical-reports.component.html',
  styleUrls: ['./medical-reports.component.css']
})
export class MedicalReportsComponent {

  // ✅ form model
  report = {
    patientName: '',
    reportType: 'Blood Test',
    details: ''
  };

  // ✅ message
  message: string = '';

  // ✅ save report function
  saveReport() {

    // validation
    if (!this.report.patientName || !this.report.details) {
      this.message = "⚠️ Please fill all required fields";
      return;
    }

    // success message
    this.message = `📄 ${this.report.reportType} Saved Successfully!`;

    // reset form
    this.report = {
      patientName: '',
      reportType: 'Blood Test',
      details: ''
    };

    // auto hide message
    setTimeout(() => {
      this.message = '';
    }, 3000);
  }

}