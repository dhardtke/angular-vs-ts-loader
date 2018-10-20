import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub927Component} from "./stub927.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub927Component
        }])
    ],
    declarations: [
        Stub927Component
    ]
})
export class Stub927Module {

}
