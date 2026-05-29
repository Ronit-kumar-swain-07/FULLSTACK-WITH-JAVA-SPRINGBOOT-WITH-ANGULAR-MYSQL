import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  isSidebarOpen = false;

  currentTime: any;

  showProfileCard: boolean = false;

  constructor() {

    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);

  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  
  toggleProfileCard() {
    this.showProfileCard = !this.showProfileCard;
  }

}