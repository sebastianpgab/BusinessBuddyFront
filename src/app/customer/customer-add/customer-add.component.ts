import { Component, Injectable, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styles: [
  ]
})
@Injectable({
  providedIn: 'root'
})
export class CustomerAddComponent implements OnInit {

  customer: Customer = {
    firstName: '',
    lastName: '',
    taxNumber: null,
    phoneNumber: '',
    email: ''
  };
  constructor(private customerService: CustomerService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  addCustomer() : void {
    this.customerService.postCustomer(this.customer).subscribe(
      () => this.messageService.success("Poprawnie dodano klienta"),
    error => this.messageService.error("Nie udało się dodać klienta"));
    }

}
