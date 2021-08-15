import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/model/bill';
import { BillService } from 'src/app/service/bill.service';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  title = 'frontend-bill';

  bills: Observable<Bill[]> = this.billService.getAll();
  tableColumns: ITableColumn [] = this.config.billColumns;

  list$: Observable<Bill[]> = this.billService.getAll();

  constructor (
    private billService : BillService,
    private config: ConfigService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  onSelectOne(bill: Bill): void {
    this.router.navigate(['/', 'bills','edit', bill._id])
  }

}
