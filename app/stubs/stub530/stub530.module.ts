import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub530Component} from "./stub530.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub530Component
        }])
    ],
    declarations: [
        Stub530Component
    ]
})
export class Stub530Module {

}
