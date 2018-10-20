import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub583Component} from "./stub583.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub583Component
        }])
    ],
    declarations: [
        Stub583Component
    ]
})
export class Stub583Module {

}
