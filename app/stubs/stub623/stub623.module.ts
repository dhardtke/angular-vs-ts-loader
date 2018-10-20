import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub623Component} from "./stub623.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub623Component
        }])
    ],
    declarations: [
        Stub623Component
    ]
})
export class Stub623Module {

}
