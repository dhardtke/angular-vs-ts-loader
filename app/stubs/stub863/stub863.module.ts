import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub863Component} from "./stub863.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub863Component
        }])
    ],
    declarations: [
        Stub863Component
    ]
})
export class Stub863Module {

}
