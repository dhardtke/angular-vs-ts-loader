import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub621Component} from "./stub621.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub621Component
        }])
    ],
    declarations: [
        Stub621Component
    ]
})
export class Stub621Module {

}
