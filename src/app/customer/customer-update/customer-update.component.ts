import { Component, Injectable, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { MessageService } from 'src/app/message.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styles: [
  ]
})
@Injectable({
  providedIn: 'root'
})
export class CustomerUpdateComponent implements OnInit {
 
  customer: Customer = {
    firstName: '',
    lastName: '',
    taxNumber: null,
    phoneNumber: '',
    email: ''
  }

  customerId: number = 13;

  constructor(private customerService: CustomerService, private messageService: MessageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {this.customerId = parseInt(params['id'])})
  }

  updateClient() : void {
    this.customerService.putCustomer(this.customer, this.customerId).subscribe(
     () => this.messageService.success("Klient został edytowany poprawnie"),
      error => this.messageService.error("Nie udało się edytować klienta"))
    }
}