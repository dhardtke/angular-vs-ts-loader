import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub216Component} from "./stub216.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub216Component
        }])
    ],
    declarations: [
        Stub216Component
    ]
})
export class Stub216Module {

}
