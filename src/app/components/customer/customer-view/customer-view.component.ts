import { Component } from '@angular/core';
import { CustomerService } from "../../../services/customer.service"
declare var $: any;
@Component({
  selector: 'customer-view',
  templateUrl: './customer-view.component.html',
  providers: [CustomerService]
})
export class CustomerViewComponent {

   page: number = 1;
   Details: any[];
   bigTotalItems: number;
   textSearch: string ="";

   Headers = ['Id', 'Name ', 'Address', 'Phone', 'Edit', 'Delete'];

  constructor(private _CustomerService: CustomerService) {
    this._CustomerService.GetCustomers("?skip=0&take=10&text=").subscribe(res => {
      this.Details = res.Data;
      this.bigTotalItems = res.Count;
   $(".overlay").hide();
    })
  }

  Search() {
    let skip : number = (this.page - 1) * 10 ;
    this._CustomerService.GetCustomers(`?skip=${skip}&take=10&text=` + this.textSearch).subscribe(res => {
      this.Details = res.Data;
      this.bigTotalItems = res.Count;
      $(".overlay").hide();
    })
  }

  DeleteCustomer(id: string) {

    this._CustomerService.DeleteCustomer(id).subscribe(res => {
      this.Search();
    })
  }
}
