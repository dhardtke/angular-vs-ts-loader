import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub680Component} from "./stub680.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub680Component
        }])
    ],
    declarations: [
        Stub680Component
    ]
})
export class Stub680Module {

}
