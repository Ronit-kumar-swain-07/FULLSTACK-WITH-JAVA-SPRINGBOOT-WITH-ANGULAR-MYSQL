import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PatientRegistrationComponent } from './components/patient-registration/patient-registration.component';
import { PatientHistoryComponent } from './components/patient-history/patient-history.component';
import { DoctorManagementComponent } from './components/doctor-management/doctor-management.component';
import { AppointmentSchedulingComponent } from './components/appointment-scheduling/appointment-scheduling.component';
import { BillingSystemComponent } from './components/billing-system/billing-system.component';
import { PrescriptionManagementComponent } from './components/prescription-management/prescription-management.component';
import { RoomAllocationComponent } from './components/room-allocation/room-allocation.component';
import { MedicalReportsComponent } from './components/medical-reports/medical-reports.component';
import { SearchComponent } from './components/search/search.component';
import { EmergencyContactComponent } from './components/emergency-contact/emergency-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    PatientLoginComponent,
    DoctorLoginComponent,
    DashboardComponent,
    PatientRegistrationComponent,
    PatientHistoryComponent,
    DoctorManagementComponent,
    AppointmentSchedulingComponent,
    BillingSystemComponent,
    PrescriptionManagementComponent,
    RoomAllocationComponent,
    MedicalReportsComponent,
    SearchComponent,
    EmergencyContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
