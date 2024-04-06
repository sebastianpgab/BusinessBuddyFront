import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from 'src/app/product/model';
import { PurchaseService } from '../purchase.service';
import { Purchase } from '../model';

@Component({
  selector: 'app-order-configuration',
  templateUrl: './order-configuration.component.html',
  styles: [
  ]
})
export class OrderConfigurationComponent implements OnInit {
  
 
  purchase: Purchase | null= null;

  constructor(public purchaseService: PurchaseService) { }

  ngOnInit(): void {
  this.purchase = this.getPurchase();

  }

  addPuchaser(){    
  }

  getPurchase(){
    return this.purchaseService.purchase;
  }

}
