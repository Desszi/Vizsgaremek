import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/service/storage.service';
import { Storage } from 'src/app/model/storage';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  
  onSelectOne(storage: Storage): void {
    this.router.navigate(['/', 'storages','edit', storage._id])
  }

}
