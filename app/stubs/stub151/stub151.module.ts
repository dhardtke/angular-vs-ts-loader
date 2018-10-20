import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub151Component} from "./stub151.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub151Component
        }])
    ],
    declarations: [
        Stub151Component
    ]
})
export class Stub151Module {

}
