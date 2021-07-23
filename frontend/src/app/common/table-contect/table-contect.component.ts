import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-table-contect',
  templateUrl: './table-contect.component.html',
  styleUrls: ['./table-contect.component.scss']
})
export class TableContectComponent<T extends {[propname: string]: any}> implements OnInit {

  @Input() tableColumns: ITableColumn [] = [];
  @Input() list$:  Observable<T[]> | null = null;
  
  constructor (
    private userService : UserService,
    private config: ConfigService,
  ) {}

  ngOnInit(): void {
  }

}
