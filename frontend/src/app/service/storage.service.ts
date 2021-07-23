import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Storage } from '../model/storage';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService extends BaseService<Storage>{

  constructor(
    public http: HttpClient,
    public config: ConfigService,
  ) { 
    super(http, config);
    this.entity = 'storages';
  }
}