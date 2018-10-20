import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub797Component} from "./stub797.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub797Component
        }])
    ],
    declarations: [
        Stub797Component
    ]
})
export class Stub797Module {

}
