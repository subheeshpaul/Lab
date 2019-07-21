import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/data.service";

@Component({
    selector: "confirmation",
    templateUrl: "confirmation.component.html",
})
export class ConfirmationComponent {
    
    constructor( public dataService: DataService) {

    }
   
}