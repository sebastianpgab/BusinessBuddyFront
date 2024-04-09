import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChooseProductsComponent } from './choose-products/choose-products.component';
import { OrderConfigurationComponent } from './order-configuration/order-configuration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'purchase/choose-products', component: ChooseProductsComponent},
  { path: 'purchase/order-config', component: OrderConfigurationComponent}
]

@NgModule({
  declarations: [ChooseProductsComponent, OrderConfigurationComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PurchaseModule { }
