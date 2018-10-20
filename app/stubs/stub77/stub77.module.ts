import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub77Component} from "./stub77.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub77Component
        }])
    ],
    declarations: [
        Stub77Component
    ]
})
export class Stub77Module {

}
