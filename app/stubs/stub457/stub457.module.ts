import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub457Component} from "./stub457.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub457Component
        }])
    ],
    declarations: [
        Stub457Component
    ]
})
export class Stub457Module {

}
