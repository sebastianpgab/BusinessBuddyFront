import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: 'order/:orderId/orderDetail/:id', component: OrderDetailComponent},
  { path: 'customer/:orderId/order', component: OrderComponent},

]

@NgModule({
  declarations: [OrderDetailComponent, OrderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [OrderDetailComponent, OrderComponent]
})
export class OrderModule { }
