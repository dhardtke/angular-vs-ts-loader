import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub369Component} from "./stub369.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub369Component
        }])
    ],
    declarations: [
        Stub369Component
    ]
})
export class Stub369Module {

}
