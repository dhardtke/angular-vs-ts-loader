import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub386Component} from "./stub386.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub386Component
        }])
    ],
    declarations: [
        Stub386Component
    ]
})
export class Stub386Module {

}
