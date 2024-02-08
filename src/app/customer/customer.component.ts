import { Component} from '@angular/core';
import { Customer } from './customer';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: []
})

export class CustomerComponent {

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
    orderDetail:{
      id: 1,
      orderDate: new Date(),
      completionDate: new Date(),
      orderStatus: "InProgress",
      notes: "Jakieś notatki",
      paymentMethod: "CreditCard",
      finalAmount: 4503
    }
  };

}
