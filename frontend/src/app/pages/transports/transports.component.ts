import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Transport } from 'src/app/model/transport';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { TransportService } from 'src/app/service/transport.service';

@Component({
  selector: 'app-transports',
  templateUrl: './transports.component.html',
  styleUrls: ['./transports.component.scss']
})
export class TransportsComponent implements OnInit {

  title = 'frontend-transport';

  transports: Observable<Transport[]> = this.transportService.getAll();

  tableColumns: ITableColumn [] = this.config.transportColumns;

  list$: Observable<Transport[]> = this.transportService.getAll();

  constructor (
    private transportService : TransportService,
    private config : ConfigService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  onSelectOne(transport: Transport): void {
    this.router.navigate(['/', 'transports','edit', transport._id])
  }
}
