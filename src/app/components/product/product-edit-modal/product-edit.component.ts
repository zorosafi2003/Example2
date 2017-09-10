import { Component, Input, DoCheck, KeyValueDiffers } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ProductService } from "../../../services/product.service"
declare var $: any;

@Component({
  selector: 'product-view',
  templateUrl: './product-edit.component.html',
  providers: [ProductService]
})
export class ProductEditComponent implements DoCheck {
  @Input() data: any = {};

  differ: any;

  Obj: any = {};
  onSave: any;

  constructor(private _ProductService: ProductService, public _BsModalRef: BsModalRef
    , private _KeyValueDiffers: KeyValueDiffers) {
    this.differ = _KeyValueDiffers.find([]).create(null);
  }

  Save() {
    this._ProductService.EditProduct(this.Obj).subscribe(res => {
      this._BsModalRef.content = true;
      this.onSave();
    })
  }

  Close() {
    this._BsModalRef.hide();
  }


  ngDoCheck() {
    var changes = this.differ.diff(this.data);
    if (changes) {
      this._ProductService.GetProducts(`?guid=${this.data.id}&IsNew=false`).subscribe(res => {
        this.Obj = res.Data;
          $(".overlay").hide();
      })
    }

  }


}
