import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub456Component} from "./stub456.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub456Component
        }])
    ],
    declarations: [
        Stub456Component
    ]
})
export class Stub456Module {

}
