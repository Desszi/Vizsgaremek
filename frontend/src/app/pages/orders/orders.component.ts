import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  title = 'frontend-order';

  orders: Observable<Order[]> = this.orderService.getAll();

  constructor (
    private orderService : OrderService,
  ) {}

  ngOnInit(): void {
  }

}
