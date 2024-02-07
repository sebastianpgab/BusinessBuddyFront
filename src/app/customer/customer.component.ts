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
    email: "sebo12p@wp.pl"
  };

}
