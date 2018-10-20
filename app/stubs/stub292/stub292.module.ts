import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub292Component} from "./stub292.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub292Component
        }])
    ],
    declarations: [
        Stub292Component
    ]
})
export class Stub292Module {

}
