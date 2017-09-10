import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from "../../../services/product.service"
import { ProductAddComponent } from "../../product/product-add-modal/product-add.component"
import { ProductEditComponent } from "../../product/product-edit-modal/product-edit.component"

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
declare var $: any;


@Component({
    selector: 'product-component',
    templateUrl: './product.component.html',
    providers: [ProductService]
})
export class ProductComponent {
     page: number = 1;
     Details: any[];
     bigTotalItems: number;
     textSearch: string = "";

    bsModalRef: BsModalRef;

     Headers = ['Id', 'Name ', 'Price', 'Edit', 'Delete'];

    constructor(private _ProductService: ProductService, private _BsModalService: BsModalService) {
        this._ProductService.GetProducts("?skip=0&take=10&text=").subscribe(res => {
            this.Details = res.Data;
            this.bigTotalItems = res.Count;
  $(".overlay").hide();
        })


    }

    Open() {
        this.bsModalRef = this._BsModalService.show(ProductAddComponent);
        this.bsModalRef.content.name = 'Add Product';
        this.bsModalRef.content.onSave = (myData) => {

            this.bsModalRef.hide();
            this.Search();
        };
    }

    Edit(id: string) {
let data : any = {name : 'Edit Product' ,id :id };
        this.bsModalRef = this._BsModalService.show(ProductEditComponent);
        this.bsModalRef.content.data = data;
        this.bsModalRef.content.onSave = (myData) => {

            this.bsModalRef.hide();
            this.Search();
        };
    }



    Search() {
        let skip: number = (this.page - 1) * 10;
        this._ProductService.GetProducts(`?skip=${skip}&take=10&text=` + this.textSearch).subscribe(res => {
            this.Details = res.Data;
            this.bigTotalItems = res.Count;
              $(".overlay").hide();
        })
    }

    DeleteCustomer(id: string) {

        this._ProductService.DeleteProduct(id).subscribe(res => {
            this.Search();
              $(".overlay").hide();
        })
    }
}