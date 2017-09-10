import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from "../../../services/customer.service"
declare var $: any;

@Component({
  selector: 'customer-view',
  templateUrl: './customer-add.component.html',
  providers: [CustomerService]
})
export class CustomerAddComponent {
  Obj: any = {};

  constructor(private _CustomerService: CustomerService, private _Router: Router) {
      this._CustomerService.GetCustomers("?guid=&IsNew=true").subscribe(res => {
    this.Obj = res.Data;
      $(".overlay").hide();
    
    })
   }

  Save() {
    this._CustomerService.AddCustomer(this.Obj).subscribe(res => {
      this._Router.navigateByUrl('/customer');
    })
  }
}
