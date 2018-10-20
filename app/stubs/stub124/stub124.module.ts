import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub124Component} from "./stub124.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub124Component
        }])
    ],
    declarations: [
        Stub124Component
    ]
})
export class Stub124Module {

}
