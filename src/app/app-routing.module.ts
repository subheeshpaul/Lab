import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Shop } from './shop/shop.component';
import { Checkout } from './checkout/checkout.component';
import { Customer } from './customerDetails/customer.component';
import { Confirmation } from './confirmation/confirmation.component';

export const routes: Routes = [
  { path: "", component: Shop },
  { path: "customer-details", component: Customer },
  { path: "checkout", component: Checkout },
  {path : "confirmation", component: Confirmation}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {


}


