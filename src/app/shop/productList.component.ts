import { Component, OnInit } from "@angular/core";
import { Product } from "../shared/product";
import { DataService } from "../shared/data.service";

@Component({
  selector: "product-list",
  templateUrl: "productList.component.html",
  styleUrls: ["productList.component.css"]
})
export class ProductListComponent implements OnInit {
  public products: Product[];

  constructor(private data: DataService) {
    this.products = data.products;
  }

  ngOnInit() {
    this.data.loadProducts()
      .subscribe(success => {
        if (success) {
          this.products = this.data.products;
        }
      });
  }

  addProduct(product: Product) {
    this.data.AddToOrder(product);
  }
}