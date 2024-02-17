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
  customers: Customer[] | undefined;
  customer: Customer | undefined;


constructor(private customerService: CustomerService){}

ngOnInit() {
  this.customerService.getCustomer().subscribe(response => { this.customer = response })
}

}
