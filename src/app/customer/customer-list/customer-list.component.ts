import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../model';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styles: [
  ]
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  constructor(private customerService: CustomerService, private messageService: MessageService) { }

  ngOnInit(): void {
    this. getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers().subscribe( response => {
      this.messageService.success("Poprawnie załadowana listę klientów");
      this.customers = response;
    },
    error => this.messageService.error("Nie udało się załadować listy klientów"));
    
  }

}
