import { Component} from '@angular/core';
import { Customer } from './customer';
import { OrderDetail } from '../order-detail/orderDetail';
import { CustomerService } from './customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: []
})

export class CustomerComponent {
  customer: Customer;
  lastOrder: OrderDetail;

  constructor(private customerService: CustomerService){
  this.customer = customerService.getCustomer()
  this.lastOrder = customerService.lastOrder();
}





  
}
