import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { OrderDetail } from '../order-detail/orderDetail';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiBaseUrl = environment.apiBaseUrl;
  constructor(private messageService: MessageService, private httpClient: HttpClient) {}

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
  getCustomers(){
    return this.httpClient.get<Customer[]>(`${this.apiBaseUrl}/client?pageSize=15&pageNumber=1`)
  }

  getCustomer(){
    return this.httpClient.get<Customer>(`${this.apiBaseUrl}/client/13`)
  }

  postCustomer(customer: Customer){
    return this.httpClient.post(`${this.apiBaseUrl}`, customer)
  }

}
