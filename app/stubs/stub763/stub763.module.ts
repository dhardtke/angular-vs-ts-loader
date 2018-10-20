import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub763Component} from "./stub763.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub763Component
        }])
    ],
    declarations: [
        Stub763Component
    ]
})
export class Stub763Module {

}
