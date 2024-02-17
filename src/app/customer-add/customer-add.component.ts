import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer/customer';
import { CustomerService } from '../customer/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styles: [
  ]
})
export class CustomerAddComponent implements OnInit {

  customer: Customer = {
    firstName: '',
    lastName: '',
    taxNumber: 0,
    phoneNumber: '',
    email: '',
  };
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  addCustomer() {
    this.customerService.postCustomer(this.customer);
    }

}
