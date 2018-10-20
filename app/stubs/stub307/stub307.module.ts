import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub307Component} from "./stub307.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub307Component
        }])
    ],
    declarations: [
        Stub307Component
    ]
})
export class Stub307Module {

}
