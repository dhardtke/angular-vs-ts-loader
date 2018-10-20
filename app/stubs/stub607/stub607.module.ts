import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub607Component} from "./stub607.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub607Component
        }])
    ],
    declarations: [
        Stub607Component
    ]
})
export class Stub607Module {

}
