import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub399Component} from "./stub399.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub399Component
        }])
    ],
    declarations: [
        Stub399Component
    ]
})
export class Stub399Module {

}
