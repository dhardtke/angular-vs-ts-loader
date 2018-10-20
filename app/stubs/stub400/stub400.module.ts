import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub400Component} from "./stub400.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub400Component
        }])
    ],
    declarations: [
        Stub400Component
    ]
})
export class Stub400Module {

}
