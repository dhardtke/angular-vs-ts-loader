import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub662Component} from "./stub662.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub662Component
        }])
    ],
    declarations: [
        Stub662Component
    ]
})
export class Stub662Module {

}
