import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesgnComponent } from './desgn/desgn.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { OdishaComponent } from './odisha/odisha.component';
import { BhubaneswarComponent } from './Odisha/bhubaneswar/bhubaneswar.component';
import { CuttackComponent } from './Odisha/cuttack/cuttack.component';
import { PuriComponent } from './Odisha/puri/puri.component';
import { BerhampurComponent } from './Odisha/berhampur/berhampur.component';
import { SambalpurComponent } from './Odisha/sambalpur/sambalpur.component';
import { MaharashtraComponent } from './maharashtra/maharashtra.component';
import { MumbaiComponent } from './Maharashtra/mumbai/mumbai.component';
import { PuneComponent } from './Maharashtra/pune/pune.component';
import { NagpurComponent } from './Maharashtra/nagpur/nagpur.component';

@NgModule({
  declarations: [
    AppComponent,
    DesgnComponent,
    C1Component,
    C2Component,
    OdishaComponent,
    BhubaneswarComponent,
    CuttackComponent,
    PuriComponent,
    BerhampurComponent,
    SambalpurComponent,
    MaharashtraComponent,
    MumbaiComponent,
    PuneComponent,
    NagpurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
