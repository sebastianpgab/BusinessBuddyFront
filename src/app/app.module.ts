import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AddressComponent } from './address/address.component';
import { CustomerComponent } from './customer/customer.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: []
})
export class AppModule { }
