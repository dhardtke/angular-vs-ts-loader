import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub438Component} from "./stub438.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub438Component
        }])
    ],
    declarations: [
        Stub438Component
    ]
})
export class Stub438Module {

}
