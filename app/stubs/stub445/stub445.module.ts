import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub445Component} from "./stub445.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub445Component
        }])
    ],
    declarations: [
        Stub445Component
    ]
})
export class Stub445Module {

}
