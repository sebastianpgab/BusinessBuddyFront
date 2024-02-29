import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { MessageService } from 'src/app/message.service';
import { Customer } from '../model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styles: [
  ]
})
export class CustomerDetailsComponent implements OnInit {

  customerId: number | null = null;
  customer: Customer | null = null;
  constructor(private customerService: CustomerService, private messageService: MessageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {this.customerId = parseInt(params['id'])})
    this.getCustomer();
  }

  getCustomer(){
    this.customerService.getCustomer(this.customerId).subscribe(response => {
      this.customer = response;
      this.messageService.success("Uzytkownik pobrany")   
    },
    error => this.messageService.error("Nie udało się pobrać użytkownika"))
  }
  

}
