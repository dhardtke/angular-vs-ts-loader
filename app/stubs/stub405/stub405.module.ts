import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub405Component} from "./stub405.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub405Component
        }])
    ],
    declarations: [
        Stub405Component
    ]
})
export class Stub405Module {

}
