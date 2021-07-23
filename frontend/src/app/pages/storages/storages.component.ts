import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/service/storage.service';
import { Storage } from 'src/app/model/storage';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';

@Component({
  selector: 'app-storages',
  templateUrl: './storages.component.html',
  styleUrls: ['./storages.component.scss']
})
export class StoragesComponent implements OnInit {

  title = 'frontend-storage';

  storages: Observable<Storage[]> = this.storageService.getAll();
  tableColumns: ITableColumn [] = this.config.storageColumns;

  list$: Observable<Storage[]> = this.storageService.getAll();
  constructor (
    private storageService : StorageService,
    private config: ConfigService,
  ) {}

  ngOnInit(): void {
  }

}
