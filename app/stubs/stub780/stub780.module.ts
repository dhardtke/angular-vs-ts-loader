import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub780Component} from "./stub780.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub780Component
        }])
    ],
    declarations: [
        Stub780Component
    ]
})
export class Stub780Module {

}
