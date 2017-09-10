import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http"
import {FormsModule} from "@angular/forms"
import { ModalModule } from 'ngx-bootstrap';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap"

import  {CustomerAddComponent} from "./components/customer/customer-add/customer-add.component"
import  {CustomerEditComponent} from "./components/customer/customer-edit/customer-edit.component"
import  {CustomerViewComponent} from "./components/customer/customer-view/customer-view.component"
import  {CustomerComponent} from "./components/customer/customer/customer.component"

import  {DashBoardComponent} from "./components/dashboard/dashboard.component"

import  {ProductComponent} from "./components/product/product-view/product.component"
import  {ProductAddComponent} from "./components/product/product-add-modal/product-add.component"
import  {ProductEditComponent} from "./components/product/product-edit-modal/product-edit.component"


import  {NavBarComponent} from "./components/shared/navbar/navbar.component"
import  {HeaderComponent} from "./components/shared/header/header.component"

import { AppComponent } from './app.component';
import {routing} from "./app.routing"

import {CustomerService} from "./services/customer.service"
import {ProductService} from "./services/product.service"

@NgModule({
  declarations: [NavBarComponent ,HeaderComponent,DashBoardComponent,ProductComponent,CustomerComponent,
    AppComponent , CustomerAddComponent,CustomerEditComponent,CustomerViewComponent ,
    ProductAddComponent , ProductEditComponent
  ],
  imports: [
    BrowserModule ,routing , HttpModule , FormsModule , NgbModule.forRoot()
    , ModalModule.forRoot()
  ],
  providers: [CustomerService , ProductService],
  entryComponents:[ProductAddComponent , ProductEditComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
