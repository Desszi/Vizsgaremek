import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseService } from './service/base.service';
import { NavigationComponent } from './common/navigation/navigation.component';
import { LayoutsideNavComponent } from './common/layoutside-nav/layoutside-nav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { ProductsComponent } from './pages/products/products.component';
import { BillsComponent } from './pages/bills/bills.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { StoragesComponent } from './pages/storages/storages.component';
import { TransportsComponent } from './pages/transports/transports.component';
import { TableContectComponent } from './common/table-contect/table-contect.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LayoutsideNavComponent,
    DashboardComponent,
    UsersComponent,
    ProductsComponent,
    BillsComponent,
    OrdersComponent,
    StoragesComponent,
    TransportsComponent,
    TableContectComponent,
    LoginComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
