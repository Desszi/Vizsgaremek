import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { TextareaField } from 'src/app/areus-form/model/textarea-field';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent implements OnInit {

  order$: Observable<Order> = this.ar.params.pipe(
    switchMap (
      params => this.orderService.get(params.id)
    )
  )

  order: Order = new Order();
  fields: FieldBase<any>[] =[];
  showForm: boolean = false;

  constructor(
    private orderService: OrderService,
    private ar: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.order$.subscribe(
      order => {
        this.order = order;
        this.setForm();
        this.showForm = true;  
       
      }
    )
  }

  setForm(): void {
    this.fields = [
      new InputField({key: '_id', label:'', type: 'hidden', value: this.order._id as unknown as string }),
      new InputField({key: 'time', label:'Time', type: 'time', value: this.order.time as unknown as string}),
      new TextareaField({key: 'comment', label:'Comment', value: this.order.comment as unknown as string }),
  
    ]
  }
  onSave(order: Order): void {
    this.orderService.update(order).subscribe(
      p => this.router.navigate(['/', 'orders'])
    )
  }

}
