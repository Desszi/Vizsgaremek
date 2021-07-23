import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/model/order';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  title = 'frontend-order';

  orders: Observable<Order[]> = this.orderService.getAll();
  tableColumns: ITableColumn [] = this.config.userColumns;

  list$: Observable<Order[]> = this.orderService.getAll();

  constructor (
    private orderService : OrderService,
    private config : ConfigService,
  ) {}

  ngOnInit(): void {
  }

}
