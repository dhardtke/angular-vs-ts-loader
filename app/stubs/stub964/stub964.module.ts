import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub964Component} from "./stub964.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub964Component
        }])
    ],
    declarations: [
        Stub964Component
    ]
})
export class Stub964Module {

}
