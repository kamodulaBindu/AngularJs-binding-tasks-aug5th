import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './Scenario1/component1/component1.component';
import { S2Component1Component } from './Scenario2/s2-component1/s2-component1.component';
import { FormsModule }   from '@angular/forms';
import { S3Component1Component } from './Scenario3/s3-component1/s3-component1.component';
import { S3Component2Component } from './Scenario3/s3-component2/s3-component2.component';
import { S4Component1Component } from './Scenario4/s4-component1/s4-component1.component';
import { S4Component2Component } from './Scenario4/s4-component2/s4-component2.component';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    S2Component1Component,
    S3Component1Component,
    S3Component2Component,
    S4Component1Component,
    S4Component2Component,
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
