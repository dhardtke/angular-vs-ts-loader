import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub693Component} from "./stub693.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub693Component
        }])
    ],
    declarations: [
        Stub693Component
    ]
})
export class Stub693Module {

}
