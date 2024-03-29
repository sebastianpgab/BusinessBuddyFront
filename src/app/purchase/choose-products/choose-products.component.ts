import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/model';
import { MessageService } from '../../message.service';
import { OrderConfigurationComponent } from '../order-configuration/order-configuration.component';

@Component({
  selector: 'app-purchase',
  templateUrl: './choose-products.component.html',
  styles: [
  ]
})
export class ChooseProductsComponent implements OnInit {

  products: Array<Product> = [];

  constructor(private productService: ProductService,  private orderConfigurationComponent: OrderConfigurationComponent) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (response) => {
        this.products = response;
      },
      (error) => console.log(error)
    );
  }

  addProductToOrder(product: Product) {
    this.orderConfigurationComponent.products.push(product);
    this.searchControl.setValue('');
  }

    

}
