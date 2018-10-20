import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub267Component} from "./stub267.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub267Component
        }])
    ],
    declarations: [
        Stub267Component
    ]
})
export class Stub267Module {

}
