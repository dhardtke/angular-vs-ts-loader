import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub253Component} from "./stub253.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub253Component
        }])
    ],
    declarations: [
        Stub253Component
    ]
})
export class Stub253Module {

}
