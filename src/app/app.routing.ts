import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { DashBoardComponent } from "./components/dashboard/dashboard.component"
import { CustomerViewComponent } from "./components/customer/customer-view/customer-view.component"
import { CustomerAddComponent } from "./components/customer/customer-add/customer-add.component"
import { CustomerEditComponent } from "./components/customer/customer-edit/customer-edit.component"
import { CustomerComponent } from "./components/customer/customer/customer.component"

import  {ProductComponent} from "./components/product/product-view/product.component"

const appRoutes: Routes = [
    {
        path: "",
        component: DashBoardComponent
    },
    {
        path: "product",
        component: ProductComponent
    },
    {
        path: "customer",
        component: CustomerComponent,
        children: [
             {
                path: "",
                component: CustomerViewComponent
            },
            {
                path: "add",
                component: CustomerAddComponent
            },
            {
                path: "edit/:id",
                component: CustomerEditComponent
            }
        ]
    }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });