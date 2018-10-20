import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub234Component} from "./stub234.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub234Component
        }])
    ],
    declarations: [
        Stub234Component
    ]
})
export class Stub234Module {

}
