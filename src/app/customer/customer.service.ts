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

  postCustomer(customer: Customer){
    return this.httpClient.post(`${this.apiBaseUrl}`, customer)
  }

  putCustomer(customer: Customer, customerId: number){
    return this.httpClient.put(`${this.apiBaseUrl}/client/${customerId}`, customer)
  }

}
