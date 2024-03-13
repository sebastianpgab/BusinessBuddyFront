import { Component} from '@angular/core';
import { Customer } from './model';
import { CustomerService } from './customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styles: []
})

export class CustomerComponent {
  customer: Customer | undefined;


constructor(private customerService: CustomerService){}

ngOnInit() {
}

}
