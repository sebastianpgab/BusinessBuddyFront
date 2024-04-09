import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from '../product/model';
import { MessageService } from '../message.service';
import { OrderProduct } from '../order/order-products/model';
import { Customer } from '../customer/model';
import { Purchase } from './model';
import { OrderDetail } from '../order/order-detail/model';
import { Address } from '../customer/address/address';
import { Order } from '../order/order/model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  searchControl = new FormControl();
  orderProducts: Array<OrderProduct> = [];
  orderDetail: OrderDetail | null = null;
  order: Order | null = null;
  address: Address | null = null;
  customer: Customer | null = null;
  purchase: Purchase | null = null;


  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private messageService: MessageService, private httpClient: HttpClient) {
    this.initializePurchase();
   }

   initializePurchase(){
    this.purchase =  {
      customer: null,
      address: null,
      order: null,
      orderDetail: null,
      orderProducts: []
    }
  }

  addProductToOrder(product: Product) {
    if(!this.purchase) {
      this.messageService.error("Zakup nie został zainicjowany!");
      return;
    }

     const orderProduct: OrderProduct = {
      quantity: 1,
      productId: product.id,
      product: product
    };

  this.purchase.orderProducts.push(orderProduct);

  this.searchControl.setValue('');
  this.messageService.success("Dodano do zamówienia");
  }

  deleteProductFromOrder(productId: number) {
    if(this.purchase && this.purchase.orderProducts){
      this.purchase.orderProducts = this.purchase.orderProducts.filter(orderProduct => orderProduct.productId !== productId);
    }
  }

  postPurchase(){
    return this.httpClient.post(`${this.apiBaseUrl}/purchase`, this.purchase);
  }



  



}
