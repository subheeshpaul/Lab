import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './shop/productList.component';
import { CartComponent } from './shop/cart.component';
import { ShopComponent } from './shop/shop.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DataService } from './shared/data.service';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CustomerComponent } from './customerDetails/customer.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HeaderInterceptor } from './Interceptor/headerInterceptor';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CartComponent,
    ShopComponent,
    CheckoutComponent,
    CustomerComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
