import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { OrderDetail } from '../order-detail/orderDetail';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() {}

  customer: Customer = {
    firstName: "Sebastian",
    lastName: " Piątkowski",
    taxNumber: 1235438323,
    phoneNumber: "796 059 543",
    email: "sebo12p@wp.pl",
    address: {
      id: 1,
      street: "Dworcowa",
      postalCode: "05-505",
      city: "Warszawa",
      clientId: 1
    },
    orderDetail:[{
      id: 1,
      orderDate: new Date(),
      completionDate: new Date(),
      orderStatus: "InProgress",
      notes: "Jakieś notatki",
      paymentMethod: "CreditCard",
      finalAmount: 4503.90
    }
    ]
  };
  getCustomer(): Customer{
    return this.customer;
  }

  lastOrder(): OrderDetail {
    const lastIndex = this.customer.orderDetail.length - 1;
    const lastOrder = this.customer.orderDetail[lastIndex];
    return lastOrder;
  }

}
