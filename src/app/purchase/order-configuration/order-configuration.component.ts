import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../purchase.service';
import { Purchase } from '../model';
import { Address } from 'src/app/customer/address/address';
import { Order } from 'src/app/order/order/model';
import { OrderDetail } from 'src/app/order/order-detail/model';
import { OrderProduct } from 'src/app/order/order-products/model';
import { Customer } from 'src/app/customer/model';

@Component({
  selector: 'app-order-configuration',
  templateUrl: './order-configuration.component.html',
})
export class OrderConfigurationComponent implements OnInit {

customer: Customer = {
    firstName: '',
    lastName: '',
    taxNumber: 0,
    phoneNumber: '',
    email: '',
};


address: Address = {
      street: '',
      buildingNumber: '',
      apartmentNumber: '',
      postalCode: '',
      city: '',
};

order: Order = {};

orderDetail: OrderDetail = {
      notes: '',
      paymentMethod: '',
};

orderProducts: OrderProduct[] = [];

  constructor(public purchaseService: PurchaseService) { }

  ngOnInit(): void {
    if (this.purchaseService.purchase) {
      this.purchaseService.purchase.customer = this.customer;
      this.purchaseService.purchase.address = this.address;
      this.purchaseService.purchase.order = this.order;
      this.purchaseService.purchase.orderDetail = this.orderDetail;
    }
  }
  

  deleteProduct(productId: number) {
    this.purchaseService.deleteProductFromOrder(productId);
  }

  createPurchaser(){
    this.purchaseService.postPurchase();
  }

}
