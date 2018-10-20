import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub691Component} from "./stub691.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub691Component
        }])
    ],
    declarations: [
        Stub691Component
    ]
})
export class Stub691Module {

}
