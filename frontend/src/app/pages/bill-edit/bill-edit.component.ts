import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';

@Component({
  selector: 'app-bill-edit',
  templateUrl: './bill-edit.component.html',
  styleUrls: ['./bill-edit.component.scss']
})
export class BillEditComponent implements OnInit {

  bill$: Observable<Bill> = this.ar.params.pipe(
    switchMap (
      params => this.billService.get(params.id)
    )
  )

  bill: Bill = new Bill();
  fields: FieldBase<any>[] =[];
  showForm: boolean = false;

  constructor(
    private billService: BillService,
    private ar: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.bill$.subscribe(
      bill => {
        this.bill = bill;
        this.setForm();
        this.showForm = true;  
       
      }
    )
  }

  setForm(): void {
    this.fields = [
      new InputField({key: '_id', label:'', type: 'hidden', value: this.bill._id as unknown as string }),
      new InputField({key: 'name', label:'Name', type: 'text', value: this.bill.name}), 
      new InputField({key: 'customer', label:'Customer', type: 'text', value: this.bill.customer as unknown as string}),
      new InputField({key: 'grand', label:'GrandTotal', type: 'number', value: this.bill.grandTotal as unknown as string }),
  
    ]
  }
  onSave(bill: Bill): void {
    this.billService.update(bill).subscribe(
      p => this.router.navigate(['/', 'bills'])
    )
  }

}
