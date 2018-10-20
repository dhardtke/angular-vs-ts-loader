import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub911Component} from "./stub911.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub911Component
        }])
    ],
    declarations: [
        Stub911Component
    ]
})
export class Stub911Module {

}
