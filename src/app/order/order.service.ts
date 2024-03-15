import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OrderDetail } from './order-detail/model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }

  getOrder(orderId: number | null, id: number | null){
    return this.httpClient.get<OrderDetail>(`${this.apiBaseUrl}/order/${orderId}/orderDetail/${id}`)
  }
}
