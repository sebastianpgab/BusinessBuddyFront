import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/model';
import { MessageService } from '../../message.service';
import { OrderConfigurationComponent } from '../order-configuration/order-configuration.component';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './choose-products.component.html',
  styles: [
  ]
})
export class ChooseProductsComponent implements OnInit {

  products: Array<Product> = [];

  constructor(private productService: ProductService,  public purchaseService: PurchaseService) { }

  ngOnInit(): void {
    this.getProducts();
    console.log('Aktualna lista wybranych produktów:', this.purchaseService.selectedProducts);

  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (response) => {
        this.products = response;
      },
      (error) => console.log(error)
    );
  }
}
