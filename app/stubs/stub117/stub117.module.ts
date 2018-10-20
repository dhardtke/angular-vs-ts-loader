import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub117Component} from "./stub117.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub117Component
        }])
    ],
    declarations: [
        Stub117Component
    ]
})
export class Stub117Module {

}
