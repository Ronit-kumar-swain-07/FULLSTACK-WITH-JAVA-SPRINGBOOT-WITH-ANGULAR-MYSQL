import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';
import { AppointmentSchedulingComponent } from './components/appointment-scheduling/appointment-scheduling.component';
import { BillingSystemComponent } from './components/billing-system/billing-system.component';
import { PrescriptionManagementComponent } from './components/prescription-management/prescription-management.component';
import { RoomAllocationComponent } from './components/room-allocation/room-allocation.component';
import { MedicalReportsComponent } from './components/medical-reports/medical-reports.component';
import { EmergencyContactComponent } from './components/emergency-contact/emergency-contact.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DoctorDashboardComponent } from './components/doctor-dashboard/doctor-dashboard.component';
import { PatientDashboardComponent } from './components/patient-dashboard/patient-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'dashboard', component: DashboardComponent },

  { path: 'admin-login', component: AdminLoginComponent },

  { path: 'doctor-login', component: DoctorLoginComponent },

  { path: 'patient-login', component: PatientLoginComponent },

  { path: 'patient-registration', component: PatientRegistrationComponent },

  { path: 'appointment', component: AppointmentSchedulingComponent },

  { path: 'billing', component: BillingSystemComponent },

  { path: 'prescription', component: PrescriptionManagementComponent },

  { path: 'room-allocation', component: RoomAllocationComponent },

  { path: 'reports', component: MedicalReportsComponent },

  { path: 'emergency', component: EmergencyContactComponent },

  { path: 'admin-dashboard', component: AdminDashboardComponent },

  { path: 'doctor-dashboard', component: DoctorDashboardComponent },

  { path: 'patient-dashboard', component: PatientDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
