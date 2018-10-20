import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub573Component} from "./stub573.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub573Component
        }])
    ],
    declarations: [
        Stub573Component
    ]
})
export class Stub573Module {

}
