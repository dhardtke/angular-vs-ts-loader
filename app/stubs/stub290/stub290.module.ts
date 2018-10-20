import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub290Component} from "./stub290.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub290Component
        }])
    ],
    declarations: [
        Stub290Component
    ]
})
export class Stub290Module {

}
