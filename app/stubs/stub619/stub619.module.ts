import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub619Component} from "./stub619.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub619Component
        }])
    ],
    declarations: [
        Stub619Component
    ]
})
export class Stub619Module {

}
