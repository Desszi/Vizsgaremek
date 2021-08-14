import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FieldBase } from 'src/app/areus-form/model/field-base';
import { InputField } from 'src/app/areus-form/model/input-field';
import { TextareaField } from 'src/app/areus-form/model/textarea-field';
import { Product } from 'src/app/model/product';
import { Storage } from 'src/app/model/storage';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  product$: Observable<Product> = this.ar.params.pipe(
    switchMap (
      params => this.productService.get(params.id)
    )
  )

  product: Product = new Product();
  fields: FieldBase<any>[] =[];
  showForm: boolean = false;

  constructor(
    private productService: ProductService,
    private ar: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.product$.subscribe(
      product => {
        this.product = product;
        this.setForm();
        this.showForm = true;  
       
      }
    )
  }

  setForm(): void {
    this.fields = [
      new InputField({key: '_id', label:'', type: 'hidden', value: this.product._id as unknown as string }),
      new InputField({key: 'name', label:'Name', type: 'text', value: this.product.name, 
      validators: [Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Ű]{1}.*$/) ], errorMessage: 'Wrong product name. Please take a good name!' }),
      new TextareaField({key: 'description', label:'Description', value: this.product.description}),
      new TextareaField({key: 'price', label:'Price', type: 'number', value: this.product.price as unknown as string }),
  
    ]
  }
  onSave(product: Product): void {
    this.productService.update(product).subscribe(
      p => this.router.navigate(['/', 'products'])
    )
  }

}
