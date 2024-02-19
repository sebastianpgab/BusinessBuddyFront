import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AddressComponent } from './address/address.component';
import { CustomerComponent } from './customer/customer.component';
import { AppComponent } from './app.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { CustomerService } from './customer/customer.service';
import { ToastrModule } from 'ngx-toastr';
import { MessageService } from './message.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { CustomerUpdateComponent } from './customer/customer-update/customer-update.component'

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AddressComponent,
    OrderDetailComponent,
    CustomerAddComponent,
    CustomerUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [
    CustomerService,
    MessageService
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
