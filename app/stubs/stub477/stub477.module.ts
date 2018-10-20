import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub477Component} from "./stub477.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub477Component
        }])
    ],
    declarations: [
        Stub477Component
    ]
})
export class Stub477Module {

}
