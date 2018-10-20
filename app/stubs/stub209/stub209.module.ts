import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub209Component} from "./stub209.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub209Component
        }])
    ],
    declarations: [
        Stub209Component
    ]
})
export class Stub209Module {

}
