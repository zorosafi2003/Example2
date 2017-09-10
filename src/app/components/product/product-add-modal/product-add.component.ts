import { Component , Input} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { ProductService } from "../../../services/product.service"
declare var $: any;

@Component({
  selector: 'product-view',
  templateUrl: './product-add.component.html',
  providers: [ProductService]
})
export class ProductAddComponent {
  @Input() name ;
  Obj: any = {};
  onSave : any ;

  constructor(private _ProductService: ProductService , public _BsModalRef: BsModalRef) {
      this._ProductService.GetProducts("?guid=&IsNew=true").subscribe(res => {
    this.Obj = res.Data;
      $(".overlay").hide();
    })
   }

  Save() {
    this._ProductService.AddProduct(this.Obj).subscribe(res => {
      this._BsModalRef.content = true;
    this.onSave();
    })
  }

  Close(){
    this._BsModalRef.hide();
  }


}
