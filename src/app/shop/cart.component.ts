import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../shared/data.service";

@Component({
  selector: "the-cart",
  templateUrl: "cart.component.html",
  styleUrls: []
})
export class CartComponent {

  constructor(public dataService: DataService, private router: Router) { }
  
  onProceed() {
    this.router.navigate(["customer-details"]);
  }

}