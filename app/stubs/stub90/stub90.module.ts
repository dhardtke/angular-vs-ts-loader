import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub90Component} from "./stub90.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub90Component
        }])
    ],
    declarations: [
        Stub90Component
    ]
})
export class Stub90Module {

}
