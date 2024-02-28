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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule, Routes } from '@angular/router';
import { CustomerModule } from './customer/customer.module';
import { NotFoundComponent } from '../core/not-found/not-found.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer/add', pathMatch: 'full'}, // Redirects to 'customer/add' if the path is empty
  { path: '**', component: NotFoundComponent} // This component will be shown for any path that does not match previously defined routes.
]

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AddressComponent,
    OrderDetailComponent,
    CustomerAddComponent,
    CustomerUpdateComponent,
    NotFoundComponent,
    CustomerListComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CustomerModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    CustomerService,
    MessageService
  ],
  bootstrap: [AppComponent] 
})
export class AppModule { }
