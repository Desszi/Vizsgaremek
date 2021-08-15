import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { Storage } from 'src/app/model/storage';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-storage-edit',
  templateUrl: './storage-edit.component.html',
  styleUrls: ['./storage-edit.component.scss']
})
export class StorageEditComponent implements OnInit {

  storage$: Observable<Storage> = this.ar.params.pipe(
    switchMap (
      params => this.storageService.get(params.id)
    )
  )

  storage: Storage = new Storage();
  fields: FieldBase<any>[] =[];
  showForm: boolean = false;

  constructor(
    private storageService: StorageService,
    private ar: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.storage$.subscribe(
      storage => {
        this.storage = storage;
        this.setForm();
        this.showForm = true;  
       
      }
    )
  }

  setForm(): void {
    this.fields = [
      new InputField({key: '_id', label:'', type: 'hidden', value: this.storage._id as unknown as string }),
      new InputField({key: 'name', label:'Name', type: 'text', value: this.storage.name}), 
      new InputField({key: 'place', label:'Place', type: 'text', value: this.storage.place as unknown as string }),
  
    ]
  }
  onSave(storage: Storage): void {
    this.storageService.update(storage).subscribe(
      p => this.router.navigate(['/', 'storages'])
    )
  }
}
