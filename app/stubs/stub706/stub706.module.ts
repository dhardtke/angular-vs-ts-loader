import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub706Component} from "./stub706.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub706Component
        }])
    ],
    declarations: [
        Stub706Component
    ]
})
export class Stub706Module {

}
