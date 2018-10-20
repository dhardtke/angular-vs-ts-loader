import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub276Component} from "./stub276.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub276Component
        }])
    ],
    declarations: [
        Stub276Component
    ]
})
export class Stub276Module {

}
