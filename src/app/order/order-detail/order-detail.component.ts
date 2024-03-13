import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { OrderDetail } from './model';
import { MessageService } from 'src/app/message.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styles: [
  ]
})
export class OrderDetailComponent implements OnInit {

  orderDetail: OrderDetail = {}
  orderId: number | null = null;
  id: number | null = null;
  constructor(private orderService: OrderService, private messageService: MessageService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.orderId = parseInt(params['orderId'])
      this.id = parseInt(params['id'])
      this.getOrderDetail();
  });

  }

  getOrderDetail(){
    this.orderService.getOrder(this.orderId, this.id).subscribe(response => {
      this.orderDetail = response;
      })
  }


}
