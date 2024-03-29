import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product/model';

@Component({
  selector: 'app-order-configuration',
  templateUrl: './order-configuration.component.html',
  styles: [
  ]
})
export class OrderConfigurationComponent implements OnInit {

  products: Array<Product> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
