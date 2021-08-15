import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { TextareaField } from 'src/app/areus-form/model/textarea-field';
import { Transport } from 'src/app/model/transport';
import { TransportService } from 'src/app/service/transport.service';

@Component({
  selector: 'app-transport-edit',
  templateUrl: './transport-edit.component.html',
  styleUrls: ['./transport-edit.component.scss']
})
export class TransportEditComponent implements OnInit {

  transport$: Observable<Transport> = this.ar.params.pipe(
    switchMap (
      params => this.transportService.get(params.id)
    )
  )

  transport: Transport = new Transport();
  fields: FieldBase<any>[] =[];
  showForm: boolean = false;

  constructor(
    private transportService: TransportService,
    private ar: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.transport$.subscribe(
      transport => {
        this.transport = transport;
        this.setForm();
        this.showForm = true;  
       
      }
    )
  }

  setForm(): void {
    this.fields = [
      new InputField({key: '_id', label:'', type: 'hidden', value: this.transport._id as unknown as string }),
      new InputField({key: 'place', label:'Place', type: 'text', value: this.transport.place}), 
      new TextareaField({key: 'start', label:'startStorage', value: this.transport.startStorage as unknown as string}),
      new InputField({key: 'travel', label:'Travel', type: 'text', value: this.transport.travelBy as unknown as string }),
      new InputField({key: 'trust', label:'TrustMember', type: 'text', value: this.transport.trustMember as unknown as string }),
    ]
  }
  onSave(transport: Transport): void {
    this.transportService.update(transport).subscribe(
      p => this.router.navigate(['/', 'transports'])
    )
  }

}
