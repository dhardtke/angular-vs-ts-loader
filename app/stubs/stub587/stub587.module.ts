import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub587Component} from "./stub587.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub587Component
        }])
    ],
    declarations: [
        Stub587Component
    ]
})
export class Stub587Module {

}
