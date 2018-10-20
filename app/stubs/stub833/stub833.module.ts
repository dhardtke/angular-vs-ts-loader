import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub833Component} from "./stub833.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub833Component
        }])
    ],
    declarations: [
        Stub833Component
    ]
})
export class Stub833Module {

}
