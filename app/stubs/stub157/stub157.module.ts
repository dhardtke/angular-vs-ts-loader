import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub157Component} from "./stub157.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub157Component
        }])
    ],
    declarations: [
        Stub157Component
    ]
})
export class Stub157Module {

}
