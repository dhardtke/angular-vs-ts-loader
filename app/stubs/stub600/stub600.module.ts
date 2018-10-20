import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub600Component} from "./stub600.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub600Component
        }])
    ],
    declarations: [
        Stub600Component
    ]
})
export class Stub600Module {

}
