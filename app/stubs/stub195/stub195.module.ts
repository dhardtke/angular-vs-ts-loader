import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub195Component} from "./stub195.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub195Component
        }])
    ],
    declarations: [
        Stub195Component
    ]
})
export class Stub195Module {

}
