import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

const routes: Routes = [
  { path: 'customer/add', component: CustomerAddComponent},
  { path: 'customer/update', component: CustomerUpdateComponent},
  { path: 'customer/list', component: CustomerListComponent},
  { path: 'customer/:id', component: CustomerDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CustomerModule { }
