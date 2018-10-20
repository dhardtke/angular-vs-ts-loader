import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub618Component} from "./stub618.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub618Component
        }])
    ],
    declarations: [
        Stub618Component
    ]
})
export class Stub618Module {

}
