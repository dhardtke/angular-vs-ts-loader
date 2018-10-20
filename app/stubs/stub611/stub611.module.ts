import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub611Component} from "./stub611.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub611Component
        }])
    ],
    declarations: [
        Stub611Component
    ]
})
export class Stub611Module {

}
