import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from 'src/app/product/model';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-order-configuration',
  templateUrl: './order-configuration.component.html',
  styles: [
  ]
})
export class OrderConfigurationComponent implements OnInit {
  
 
  constructor(public purchaseService: PurchaseService) { }

  ngOnInit(): void {

  }

}
