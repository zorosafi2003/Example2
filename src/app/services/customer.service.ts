import {Injectable} from "@angular/core"
import {Http} from "@angular/http"
import 'rxjs/add/operator/map';
declare var $: any;
@Injectable()

export class CustomerService{
 private searchUrl: string = "http://34.212.162.124/api/";
    constructor(private _http:Http){}

    GetCustomers(queryUrl: string){
        $(".overlay").show();
       return  this._http.get(this.searchUrl+"customer"+ queryUrl).map(res => res.json());
    }

    SearchCustomer(queryUrl: string){
         $(".overlay").show();
        return this._http.get(this.searchUrl+"customer"+ queryUrl).map(res => res.json()); 
    }

     AddCustomer(obj: any){
          $(".overlay").show();
        return this._http.post(this.searchUrl+"customer",obj).map(res => res.json()); 
    }

      EditCustomer(obj: any){
           $(".overlay").show();
        return this._http.put(this.searchUrl+"customer",obj).map(res => res.json()); 
    }
       DeleteCustomer(id: string){
            $(".overlay").show();
        return this._http.delete(this.searchUrl+"customer",id).map(res => res.json()); 
    }
}