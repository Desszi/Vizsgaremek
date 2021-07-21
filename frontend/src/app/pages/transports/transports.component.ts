import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transport } from 'src/app/model/transport';
import { TransportService } from 'src/app/service/transport.service';

@Component({
  selector: 'app-transports',
  templateUrl: './transports.component.html',
  styleUrls: ['./transports.component.scss']
})
export class TransportsComponent implements OnInit {

  title = 'frontend-transport';

  transports: Observable<Transport[]> = this.transportService.getAll();

  constructor (
    private transportService : TransportService,
  ) {}

  ngOnInit(): void {
  }

}
