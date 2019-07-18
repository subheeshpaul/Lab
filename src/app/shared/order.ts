import * as _ from "lodash";
import { CustomerModel } from "./customer";

export class Order {
  orderNumber: string;
  items: Array<OrderItem> = new Array<OrderItem>();
  customerName: string;
  customerAddress1: string;
  customerAddress2: string;
  customerCity: string
  customerCounty: string;
  customerCountry: string


  get subtotal(): number {
    return _.sum(_.map(this.items, i => i.productUnitPrice * i.quantity));
  };

  get totalWeight(): number {
    return _.sum(_.map(this.items, i => i.productUnitWeight * i.quantity));
  }

}

export class OrderItem {
  quantity: number;
  productUnitPrice: number;
  productId: number;
  productUnitWeight: number;
  productName: string;

}