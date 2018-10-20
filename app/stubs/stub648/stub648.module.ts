import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub648Component} from "./stub648.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub648Component
        }])
    ],
    declarations: [
        Stub648Component
    ]
})
export class Stub648Module {

}
