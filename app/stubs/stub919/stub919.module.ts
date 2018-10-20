import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub919Component} from "./stub919.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub919Component
        }])
    ],
    declarations: [
        Stub919Component
    ]
})
export class Stub919Module {

}
