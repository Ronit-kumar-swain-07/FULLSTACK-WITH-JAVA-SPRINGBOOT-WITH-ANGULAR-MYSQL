import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentFeeComponent } from './student-fee/student-fee.component';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  declarations: [
    StudentFeeComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StudentFeeComponent,
    StudentListComponent
  ]
})
export class StudentmanagementModule { }