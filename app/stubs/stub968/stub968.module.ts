import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub968Component} from "./stub968.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub968Component
        }])
    ],
    declarations: [
        Stub968Component
    ]
})
export class Stub968Module {

}
