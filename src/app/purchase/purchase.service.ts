import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from '../product/model';
import { MessageService } from '../message.service';
import { OrderProduct } from '../order/order-products/model';
import { Purchase } from './model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  searchControl = new FormControl();

  purchase: Purchase = {
    ClientDto: {},
    AddressDto: {},
    OrderDto: {},
    OrderDetailDto: {},
    OrderProductsDto: []
  };

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private messageService: MessageService, private httpClient: HttpClient) {}

  addProductToOrder(product: Product) {
    if (product.id === undefined) {
      this.messageService.error("Produkt nie posiada identyfikatora.");
      return;
    }

    const orderProduct: OrderProduct = {
      quantity: 1,
      productId: product.id,
      product: product,
    };

    this.purchase.OrderProductsDto.push(orderProduct);
    this.searchControl.reset(); 
    this.messageService.success("Dodano do zamówienia");
  }

  deleteProductFromOrder(productId: number | undefined) {
    if (productId === undefined) {
      return;
    }

    this.purchase.OrderProductsDto = this.purchase?.OrderProductsDto.filter(orderProduct => orderProduct.productId !== productId);
  }

  postPurchase(purchase: Purchase) {
    return this.httpClient.post(`${this.apiBaseUrl}/purchase`, purchase);
  }
}
