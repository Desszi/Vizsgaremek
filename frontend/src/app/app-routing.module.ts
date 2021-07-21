import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent } from './pages/bills/bills.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';
import { StoragesComponent } from './pages/storages/storages.component';
import { TransportsComponent } from './pages/transports/transports.component';
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
    path: 'bills', 
    component: BillsComponent,
  },
  {
    path: 'products', 
    component: ProductsComponent,
  },
  {
    path: 'storages', 
    component: StoragesComponent,
  },
  {
    path: 'transports', 
    component: TransportsComponent,
  },
  {
    path: 'orders', 
    component: OrdersComponent,
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
