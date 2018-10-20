import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub424Component} from "./stub424.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub424Component
        }])
    ],
    declarations: [
        Stub424Component
    ]
})
export class Stub424Module {

}
