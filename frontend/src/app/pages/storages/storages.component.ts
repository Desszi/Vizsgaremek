import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/service/storage.service';
import { Storage } from 'src/app/model/storage';

@Component({
  selector: 'app-storages',
  templateUrl: './storages.component.html',
  styleUrls: ['./storages.component.scss']
})
export class StoragesComponent implements OnInit {

  title = 'frontend-storage';

  storages: Observable<Storage[]> = this.storageService.getAll();

  constructor (
    private storageService : StorageService,
  ) {}

  ngOnInit(): void {
  }

}
