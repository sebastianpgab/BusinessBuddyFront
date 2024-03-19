import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Product } from 'src/app/product/model';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent implements OnInit {

  searchControl = new FormControl();
  products$: Array<Product> = [];
  selectedProducts: Array<Product> = [];

  constructor(private productService: ProductService) { }

 
  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (response) => {
        this.products$ = response;
      },
      (error) => console.log(error)
    );
  }

  addProductToOrder(product: Product) {
    this.selectedProducts.push(product);
    this.searchControl.setValue('');
  }

  deleteProductToOrder(productId: number){
    this.selectedProducts = this.selectedProducts.filter( product => product.id !== productId);
  }


}
