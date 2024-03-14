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
  products$: Observable<Product[]>;
  selectedProducts: Product[] = [];

  constructor(private productService: ProductService) { }

 
  ngOnInit() {
    this.products$ = this.searchControl.valueChanges.pipe(
      debounceTime(300), 
      distinctUntilChanged(), 
      switchMap(query => this.productService.searchProducts(query))
    );
  }

  addProductToOrder(product: Product) {
    this.selectedProducts.push(product);
    this.searchControl.setValue('');
  }


}
