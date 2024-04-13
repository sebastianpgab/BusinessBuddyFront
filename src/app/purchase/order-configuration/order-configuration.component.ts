import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../purchase.service';
import { Purchase } from '../model';
import { Address } from 'src/app/customer/address/address';
import { Order } from 'src/app/order/order/model';
import { OrderDetail } from 'src/app/order/order-detail/model';
import { OrderProduct, OrderProductNew } from 'src/app/order/order-products/model';
import { Customer } from 'src/app/customer/model';
import { MessageService } from 'src/app/message.service';
import { Product } from 'src/app/product/model';

@Component({
  selector: 'app-order-configuration',
  templateUrl: './order-configuration.component.html',
})
export class OrderConfigurationComponent implements OnInit {

  purchase: Purchase = {
   
customer: {
    firstName: '',
    lastName: '',
    taxNumber: '0',
    phoneNumber: '',
    email: '',
},

address:  {
      street: '',
      buildingNumber: '',
      apartmentNumber: '',
      postalCode: '',
      city: '',
      clientId: 1,
      orderDetailId: 2
},

order: {
  clientId: 1,
  orderDetailId: 2,
  invoiceId: 3
},

orderDetail:  {
  orderDate: new Date(), 
  status: 0,
  notes: '', 
  paymentMethod: 1,
},
 orderProducts: [
    {
      totalAmount: 150,
      quantity: 1,
      productId: 5678
    },
    {
      totalAmount: 200,
      quantity: 3,
      productId: 9012
    }
  ]
};

  orderDetail: OrderDetail | null = null;
  customer: Customer | null  = null;
  address: Address | null = null;
  order: Order | null = null;

  constructor(public purchaseService: PurchaseService, private messageService: MessageService) { }

  ngOnInit(): void {
    if (this.purchaseService.purchase) {
     this.purchaseService.purchase.customer = this.customer;
    this.purchaseService.purchase.address = this.address;
     this.purchaseService.purchase.order = this.order;
     this.purchaseService.purchase.orderDetail = this.orderDetail;
    }
  }

 
  deleteProduct(productId: number) {
    if( productId != undefined){
      this.purchaseService.deleteProductFromOrder(productId);
    }
  }

  addPurchase(){
    console.log('Final Purchase Object:', this.purchase.address);
    this.purchaseService.postPurchase(this.purchase).subscribe( 
      () => {this.messageService.success("Dodano zamówienie")},
      error => {
        console.error('Error adding purchase:', error);
       this.messageService.error("Nie udało się dodać zamówienia")
      }
    );
  }

}