import { Component, Injectable, OnInit } from '@angular/core';
import { Customer } from '../model';
import { CustomerService } from '../customer.service';
import { MessageService } from 'src/app/message.service';
import { DashboardService } from 'src/app/dashboard/dashboard.service';
import { Router, RouterLink } from '@angular/router';

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
  constructor(private customerService: CustomerService, private messageService: MessageService, 
    private dashboardService: DashboardService, private router: Router) { }

  ngOnInit(): void {
  }

  addCustomer() : void {
    this.customerService.postCustomer(this.customer).subscribe(
      () => {this.messageService.success("Poprawnie dodano klienta")
      var date = new Date();
      this.dashboardService.addAction(`Dodanie klienta: ${this.customer.firstName} (${date.toLocaleDateString()})`)},
    error => this.messageService.error("Nie udało się dodać klienta"));
    }

}
