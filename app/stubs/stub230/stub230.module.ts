import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub230Component} from "./stub230.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub230Component
        }])
    ],
    declarations: [
        Stub230Component
    ]
})
export class Stub230Module {

}
