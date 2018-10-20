import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub382Component} from "./stub382.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub382Component
        }])
    ],
    declarations: [
        Stub382Component
    ]
})
export class Stub382Module {

}
