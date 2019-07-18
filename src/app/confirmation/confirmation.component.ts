import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/dataService";

@Component({
    selector: "confirmation",
    templateUrl: "confirmation.component.html",
})
export class Confirmation {
    
    constructor( public data: DataService) {

    }
   
}