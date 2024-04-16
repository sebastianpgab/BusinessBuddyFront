import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../purchase.service';
import { Purchase } from '../model';
import { Address } from 'src/app/customer/address/address';
import { Order } from 'src/app/order/order/model';
import { OrderDetail } from 'src/app/order/order-detail/model';
import { OrderProduct } from 'src/app/order/order-products/model';
import { Customer } from 'src/app/customer/model';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-order-configuration',
  templateUrl: './order-configuration.component.html',
})
export class OrderConfigurationComponent implements OnInit {

  orderDetail: OrderDetail = {}; 
  customer: Customer = {};
  address: Address = {
    buildingNumber: '',
    apartmentNumber: ''
  };
  order: Order = {};
  orderProducts: OrderProduct[] = [];

  constructor(public purchaseService: PurchaseService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.customer = this.purchaseService.purchase?.ClientDto || {};
    this.address = this.purchaseService.purchase?.AddressDto || {};
    this.order = this.purchaseService.purchase?.OrderDto || {};
    this.orderDetail = this.purchaseService.purchase?.OrderDetailDto || {};
    this.orderProducts = this.purchaseService.purchase?.OrderProductsDto || [];

    const savedOrder = localStorage.getItem('order');
    if (savedOrder) {
      this.purchaseService.purchase.OrderProductsDto = JSON.parse(savedOrder);
    }
  }

  deleteProduct(productId: number) {
    this.purchaseService.deleteProductFromOrder(productId);
  }

  addPurchase() {
    if (!this.purchaseService.purchase) {
      this.messageService.error("Brak danych zakupu, nie można złożyć zamówienia.");
      return;
    }

    this.purchaseService.postPurchase(this.purchaseService.purchase).subscribe(
      () => this.messageService.success("Dodano zamówienie"),
      error => {
        this.messageService.error("Nie udało się dodać zamówienia");
      }
    );
  }
}
