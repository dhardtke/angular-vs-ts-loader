import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub678Component} from "./stub678.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub678Component
        }])
    ],
    declarations: [
        Stub678Component
    ]
})
export class Stub678Module {

}
