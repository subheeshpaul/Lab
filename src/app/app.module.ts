import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ProductList } from './shop/productList.component';
import { Cart } from './shop/cart.component';
import { Shop } from './shop/shop.component';
import { Checkout } from './checkout/checkout.component';
import { DataService } from './shared/dataService';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { Customer } from './customerDetails/customer.component';
import { Confirmation } from './confirmation/confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductList,
    Cart,
    Shop,
    Checkout,
    Customer,
    Confirmation
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
