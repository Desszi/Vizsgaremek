import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Storage } from '../model/storage';


@Injectable({
  providedIn: 'root'
})
export class StorageService extends BaseService<Storage>{

  constructor(
    public http: HttpClient,
  ) { 
    super(http);
    this.entity = 'storages';
  }
}