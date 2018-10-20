import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub744Component} from "./stub744.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub744Component
        }])
    ],
    declarations: [
        Stub744Component
    ]
})
export class Stub744Module {

}
