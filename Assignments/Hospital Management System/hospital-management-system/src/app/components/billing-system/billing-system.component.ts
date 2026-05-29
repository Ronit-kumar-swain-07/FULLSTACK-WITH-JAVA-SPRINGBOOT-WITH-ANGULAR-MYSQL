import { Component } from '@angular/core';

@Component({
  selector: 'app-billing-system',
  templateUrl: './billing-system.component.html',
  styleUrls: ['./billing-system.component.css']
})
export class BillingSystemComponent {

  // ✅ Form model
  bill = {
    patientName: '',
    amount: '',
    paymentMethod: 'Cash'
  };

  // ✅ message
  message: string = '';

  // ✅ generate bill function
  generateBill() {

    // validation
    if (!this.bill.patientName || !this.bill.amount) {
      this.message = "⚠️ Please fill all fields";
      return;
    }

    // success message
    this.message = `💰 Bill Generated Successfully via ${this.bill.paymentMethod}!`;

    // reset form
    this.bill = {
      patientName: '',
      amount: '',
      paymentMethod: 'Cash'
    };

    // auto hide message
    setTimeout(() => {
      this.message = '';
    }, 3000);
  }

}