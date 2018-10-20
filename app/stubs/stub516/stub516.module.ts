import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub516Component} from "./stub516.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub516Component
        }])
    ],
    declarations: [
        Stub516Component
    ]
})
export class Stub516Module {

}
