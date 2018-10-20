import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub103Component} from "./stub103.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub103Component
        }])
    ],
    declarations: [
        Stub103Component
    ]
})
export class Stub103Module {

}
