import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ConfigService, ITableColumn } from 'src/app/service/config.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  title = 'frontend-product';

  products: Observable<Product[]> = this.productService.getAll();
  tableColumns: ITableColumn [] = this.config.productColumns;

  list$: Observable<Product[]> = this.productService.getAll();

  constructor (
    private productService : ProductService,
    private config : ConfigService,
  ) {}

  ngOnInit(): void {
  }

}
