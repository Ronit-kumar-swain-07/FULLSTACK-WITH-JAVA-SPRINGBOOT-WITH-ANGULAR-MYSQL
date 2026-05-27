import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StudentmanagementModule } from './studentmanagement/studentmanagement.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StudentmanagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }