import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isSidebarOpen = false;

  currentTime: any;

  showProfileCard: boolean = false;

  // ✅ NEW: store user role (admin / doctor / patient)
  role: string = '';

  constructor(private router: Router) {
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);
  }

  // Sidebar toggle
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  // Profile card toggle
  toggleProfileCard() {
    this.showProfileCard = !this.showProfileCard;
  }

  // ✅ NEW: set role after login (call this from login pages later)
  setRole(role: string) {
    this.role = role;
    localStorage.setItem('role', role);
  }

  // ✅ NEW: get role (useful for UI control)
  getRole(): string {
    return localStorage.getItem('role') || this.role;
  }

  // ✅ NEW: logout system
  logout() {
    this.role = '';
    localStorage.removeItem('role');

    this.router.navigate(['/admin-login']); // default back to login
  }
}
