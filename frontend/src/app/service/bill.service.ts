import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bill } from '../model/bill';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BillService extends BaseService<Bill>{

  constructor(
    public http: HttpClient,
    public config: ConfigService,
  ) { 
    super(http, config);
    this.entity = 'bills';
  }
}