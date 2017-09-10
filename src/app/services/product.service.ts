import {Injectable} from "@angular/core"
import {Http} from "@angular/http"
import 'rxjs/add/operator/map';
declare var $: any;

@Injectable()

export class ProductService{
 private searchUrl: string = "http://34.212.162.124/api/";
    constructor(private _http:Http){}

    GetProducts(queryUrl: string){
         $(".overlay").show();
        return this._http.get(this.searchUrl+"product"+ queryUrl).map(res => res.json()); 
    }

    SearchProduct(queryUrl: string){
         $(".overlay").show();
        return this._http.get(this.searchUrl+"product"+ queryUrl).map(res => res.json()); 
    }

     AddProduct(obj: any){
          $(".overlay").show();
        return this._http.post(this.searchUrl+"product",obj).map(res => res.json()); 
    }

      EditProduct(obj: any){
           $(".overlay").show();
        return this._http.put(this.searchUrl+"product",obj).map(res => res.json()); 
    }
       DeleteProduct(id: string){
            $(".overlay").show();
        return this._http.delete(this.searchUrl+"product",id).map(res => res.json()); 
    }
}