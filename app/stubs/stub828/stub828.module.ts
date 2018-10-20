import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub828Component} from "./stub828.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub828Component
        }])
    ],
    declarations: [
        Stub828Component
    ]
})
export class Stub828Module {

}
