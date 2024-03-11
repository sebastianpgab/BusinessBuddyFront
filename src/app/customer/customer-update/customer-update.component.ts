import { Component, Injectable, OnInit } from '@angular/core';
import { Customer } from '../model';
import { CustomerService } from '../customer.service';
import { MessageService } from 'src/app/message.service';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from 'src/app/dashboard/dashboard.service';

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

  constructor(private customerService: CustomerService, private messageService: MessageService, private activatedRoute: ActivatedRoute,
    private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {this.customerId = parseInt(params['id'])})
  }

  updateClient() : void {
    this.customerService.putCustomer(this.customer, this.customerId).subscribe(
     () => {this.messageService.success("Klient został edytowany poprawnie")
     var date = new Date();
     this.dashboardService.addAction(`Usunięcie klienta: ${this.customer.firstName} (${date.toLocaleDateString()})`)},
     error => this.messageService.error("Nie udało się edytować klienta"))
    }
}