import { Component, OnInit } from '@angular/core';
import { OrderDetail } from '../model';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styles: [
  ]
})
export class OrderAddComponent implements OnInit {

  orderDetail: OrderDetail | undefined;;
  constructor() { }

  ngOnInit(): void {
  }

  addOrderDetail() {
    throw new Error('Method not implemented.');
    }

}
