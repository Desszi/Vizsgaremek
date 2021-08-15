import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Order } from './model/order';
import { BillEditComponent } from './pages/bill-edit/bill-edit.component';
import { BillsComponent } from './pages/bills/bills.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderEditComponent } from './pages/order-edit/order-edit.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductsComponent } from './pages/products/products.component';
import { StorageEditComponent } from './pages/storage-edit/storage-edit.component';
import { StoragesComponent } from './pages/storages/storages.component';
import { TransportEditComponent } from './pages/transport-edit/transport-edit.component';
import { TransportsComponent } from './pages/transports/transports.component';
import { UserEditComponent } from './pages/user-edit/user-edit.component';
import { UsersComponent } from './pages/users/users.component';


const routes: Routes = [
  {
    path: '', 
    component: DashboardComponent,
  },
  {
    path: 'users', 
    component: UsersComponent,
  },
  {
    path: 'users/edit/:id', 
    component: UserEditComponent,
  },
  {
    path: 'bills', 
    component: BillsComponent,
  },
  {
    path: 'bills/edit/:id', 
    component: BillEditComponent,
  },
  {
    path: 'products', 
    component: ProductsComponent,
  },
  {
    path: 'products/edit/:id', 
    component: ProductEditComponent,
  },
  {
    path: 'storages', 
    component: StoragesComponent,
  },
  {
    path: 'storages/edit/:id', 
    component: StorageEditComponent,
  },
  {
    path: 'transports', 
    component: TransportsComponent,
  },
  {
    path: 'transports/edit/:id', 
    component: TransportEditComponent,
  },
  {
    path: 'orders', 
    component: OrdersComponent,
  },
  {
    path: 'orders/edit/:id', 
    component: OrderEditComponent,
  },
  {
    path: 'login', 
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
