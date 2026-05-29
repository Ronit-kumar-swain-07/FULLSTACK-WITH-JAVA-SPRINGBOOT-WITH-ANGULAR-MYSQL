import { Component } from '@angular/core';

@Component({
  selector: 'app-room-allocation',
  templateUrl: './room-allocation.component.html',
  styleUrls: ['./room-allocation.component.css']
})
export class RoomAllocationComponent {

  room = {
    patientName: '',
    roomNumber: '',
    roomType: 'General',
    admissionDate: ''
  };

  message: string = '';

  allocateRoom() {

    if (!this.room.patientName || !this.room.roomNumber || !this.room.admissionDate) {
      this.message = "Please fill all required fields";
      return;
    }

    this.message = `Room Allocated Successfully (${this.room.roomType} - ${this.room.roomNumber})!`;

    this.room = {
      patientName: '',
      roomNumber: '',
      roomType: 'General',
      admissionDate: ''
    };

    setTimeout(() => {
      this.message = '';
    }, 3000);
  }

}