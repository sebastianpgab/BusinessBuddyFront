import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../purchase.service';
import { Purchase } from '../model';

@Component({
  selector: 'app-order-configuration',
  templateUrl: './order-configuration.component.html',
})
export class OrderConfigurationComponent implements OnInit {
  purchase: Purchase | null = null;

  firstName: string = '';
  lastName: string = '';
  taxNumber: number = 0;
  phoneNumber: string = '';
  email: string = '';

  street: string = '';
  buildingNumber: string = '';
  apartmentNumber: string = '';
  postalCode: string = '';
  city: string = '';

  notes: string = '';
  paymentMethod: string = '';

  constructor(public purchaseService: PurchaseService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.purchase = this.purchaseService.purchase;
    
    if (this.purchase && this.purchase.customer) {
      this.firstName = this.purchase.customer.firstName || '';
      this.lastName = this.purchase.customer.lastName || '';
      this.taxNumber = this.purchase.customer.taxNumber || 0;
      this.phoneNumber = this.purchase.customer.phoneNumber || '';
      this.email = this.purchase.customer.email || '';
    }
    if (this.purchase && this.purchase.address) {
      this.street = this.purchase.address.street || '';
      this.buildingNumber = this.purchase.address.buildingNumber || '';
      this.apartmentNumber = this.purchase.address.apartmentNumber || '';
      this.postalCode = this.purchase.address.postalCode || '';
      this.city = this.purchase.address.city || '';
    }
    this.notes = this.purchase?.orderDetail?.notes || '';
    this.paymentMethod = this.purchase?.orderDetail?.paymentMethod || '';
  }

  deleteProduct(productId: number) {
    this.purchaseService.deleteProductFromOrder(productId);
    this.initializeForm();
  }

  createPurchaser(){
    this.purchaseService.postPurchase(this.purchase);
  }

}
