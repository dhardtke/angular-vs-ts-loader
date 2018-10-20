import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub663Component} from "./stub663.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub663Component
        }])
    ],
    declarations: [
        Stub663Component
    ]
})
export class Stub663Module {

}
