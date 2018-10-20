import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub760Component} from "./stub760.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub760Component
        }])
    ],
    declarations: [
        Stub760Component
    ]
})
export class Stub760Module {

}
