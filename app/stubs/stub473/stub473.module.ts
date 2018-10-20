import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub473Component} from "./stub473.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub473Component
        }])
    ],
    declarations: [
        Stub473Component
    ]
})
export class Stub473Module {

}
