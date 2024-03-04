import { Injectable } from '@angular/core';
import { Customer } from './model';
import { MessageService } from '../message.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PagedResult } from '../models/page-result-model';
import { Address } from './address/address';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiBaseUrl = environment.apiBaseUrl;
  constructor(private messageService: MessageService, private httpClient: HttpClient) {}

  postCustomer(customer: Customer){
    return this.httpClient.post(`${this.apiBaseUrl}/client`, customer)
  }

  putCustomer(customer: Customer, customerId: number){
    return this.httpClient.put(`${this.apiBaseUrl}/client/${customerId}`, customer)
  }

  getCustomers(){
    return this.httpClient.get<PagedResult<Customer>>(`${this.apiBaseUrl}/client?pageSize=15&pageNumber=1`)
  }

  getCustomer( customerId: number | null){
    return this.httpClient.get<Customer>(`${this.apiBaseUrl}/client/${customerId}`)
  }

  //zrobić w api ze po adresie ip klienta wyszuka się odpowiedni adres
  getAddress( customerId: number | null){
    return this.httpClient.get<Address>(`${this.apiBaseUrl}/address/${customerId}`)
  }

}
