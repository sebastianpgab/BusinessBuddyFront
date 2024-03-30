import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from '../product/model';
import { MessageService } from '../message.service';
import { OrderProduct } from '../order/order-products/model';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  searchControl = new FormControl();
  selectedProducts: Array<Product> = [];
  orderProducts: Array<OrderProduct> = [];


  constructor(private messageService: MessageService) { }

  addProductToOrder(product: Product) {
    const orderProduct: OrderProduct = {
      quantity: 1,
      productId: product.id,
      product: product
    };

  this.orderProducts.push(orderProduct);

  this.searchControl.setValue('');
  this.messageService.success("Dodano do zamówienia");
  }

  deleteProductFromOrder(productId: number) {
    this.orderProducts = this.orderProducts.filter(orderProduct => orderProduct.productId !== productId);
  }
}
