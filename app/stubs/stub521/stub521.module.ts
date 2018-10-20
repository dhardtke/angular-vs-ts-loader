import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub521Component} from "./stub521.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub521Component
        }])
    ],
    declarations: [
        Stub521Component
    ]
})
export class Stub521Module {

}
