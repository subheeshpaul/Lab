import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import { map } from 'rxjs/operators';
import { Product } from "./product";
import { Order, OrderItem } from "./order";
import { CustomerModel } from "./customer";

@Injectable()
export class DataService {

  constructor(private http: HttpClient) {

  }

  public order: Order = new Order();

  public products: Product[] = [];

  loadProducts(): Observable<boolean> {
    return this.http.get("http://localhost:2112//api/products")
      .pipe(
        map((data: any[]) => {
          this.products = data;
          return true;
        }));
  }


  public checkout() {
    if (!this.order.orderNumber) {
      this.order.orderNumber = new Date().getFullYear().toString() + new Date().getTime().toString();
    }
    return this.http.post("http://localhost:2112//api/orders", this.order)
      .pipe(
        map((response: Order )=> {
          this.order = response;
          return true;
        }));
  }

  public AddToOrder(product: Product) {

    let item: OrderItem = this.order.items.find(i => i.productId == product.id);

    if (item) {

      item.quantity++;

    } else {

      item = new OrderItem();
      item.productId = product.id;
      item.productUnitPrice = product.unitPrice;
      item.productUnitWeight = product.unitWeight;
      item.quantity = 1;
      item.productName = product.name;

      this.order.items.push(item);
    }
  }
}