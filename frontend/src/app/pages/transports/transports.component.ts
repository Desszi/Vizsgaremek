import { Component, OnInit } from '@angular/core';
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
  constructor (
    private transportService : TransportService,
    private config : ConfigService
  ) {}

  ngOnInit(): void {
  }

}
