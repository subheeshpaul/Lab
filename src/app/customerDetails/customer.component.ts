import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/data.service";
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from "@angular/router";
import { CustomerModel } from "../shared/customer";

@Component({
    selector: "customer",
    templateUrl: "customer.component.html",
})
export class CustomerComponent implements OnInit {
    public customerForm: FormGroup;

    constructor(private fb: FormBuilder, public data: DataService, private router: Router) {

    }

    ngOnInit() {

        this.initializeForm();
    }

    get name(): AbstractControl {

        return this.customerForm.get("customerName");
    }

    get address1(): AbstractControl {

        return this.customerForm.get("customerAddress1");
    }

    get city(): AbstractControl {

        return this.customerForm.get("customerCity");
    }

    get county(): AbstractControl {

        return this.customerForm.get("customerCounty");
    }

    get country(): AbstractControl {

        return this.customerForm.get("customerCountry");
    }

    public onCheckout(): void {
        let customer: CustomerModel = this.customerForm.value;
        this.data.order.customerName  = customer.customerName;
        this.data.order.customerAddress1  = customer.customerAddress1;
        this.data.order.customerAddress2  = customer.customerAddress2;
        this.data.order.customerCity  = customer.customerCity;
        this.data.order.customerCounty  = customer.customerCounty;
        this.data.order.customerCountry  = customer.customerCountry;
        this.data.checkout().subscribe(response => {
            if(response) {
                this.router.navigate(["confirmation"]);
            }
        });
        
    }

    private initializeForm(): void {
        this.customerForm = this.fb.group({
            customerName: [" ", Validators.required],
            customerAddress1: [" ", Validators.required],
            customerAddress2: [" "],
            customerCity: [" ", Validators.required],
            customerCounty: [" ", Validators.required],
            customerCountry: [" ", Validators.required]
        });
    }

}