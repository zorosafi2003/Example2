import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from "../../../services/customer.service"
declare var $: any;

@Component({
  selector: 'customer-view',
  templateUrl: './customer-edit.component.html'
})
export class CustomerEditComponent implements OnInit {
  Obj: any = {};

  constructor(private _CustomerService: CustomerService, private _Router: Router
    , private _ActivatedRoute: ActivatedRoute) {

  }

  Save() {
    this._CustomerService.EditCustomer(this.Obj).subscribe(res => {
      this._Router.navigateByUrl('/customer');
    })
  }

  ngOnInit() {

    console.log(this._ActivatedRoute.snapshot.queryParams);
    this._ActivatedRoute.params.subscribe(params => {
      this._CustomerService.GetCustomers(`?guid=${params['id']}&IsNew=false`).subscribe(res => {
        this.Obj = res.Data;
          $(".overlay").hide();
      })

    }

    );
  }
}
