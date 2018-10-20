import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub786Component} from "./stub786.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub786Component
        }])
    ],
    declarations: [
        Stub786Component
    ]
})
export class Stub786Module {

}
