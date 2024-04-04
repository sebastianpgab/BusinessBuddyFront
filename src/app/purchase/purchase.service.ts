import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from '../product/model';
import { MessageService } from '../message.service';
import { OrderProduct } from '../order/order-products/model';
import { Customer } from '../customer/model';
import { Purchase } from './model';
import { OrderDetail } from '../order/order-detail/model';
import { Address } from '../customer/address/address';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  searchControl = new FormControl();
  selectedProducts: Array<Product> = [];
  orderProducts: Array<OrderProduct> = [];
  orderDetail: OrderDetail | null = null;
  address: Address | null = null;
  customer: Customer | null = null;
  purchase: Purchase | null= null;


  constructor(private messageService: MessageService) {
    this.initializePurchase()
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

  addCustomerToOrder(customer: Customer | null){

    if(!customer){
      this.messageService.error("Uzupełnij dane klienta")
      return;
    }
    if(this.purchase){
      this.purchase.customer = customer;
    }
     
  }


}
