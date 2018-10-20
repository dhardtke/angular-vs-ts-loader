import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub815Component} from "./stub815.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub815Component
        }])
    ],
    declarations: [
        Stub815Component
    ]
})
export class Stub815Module {

}
