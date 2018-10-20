import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub420Component} from "./stub420.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub420Component
        }])
    ],
    declarations: [
        Stub420Component
    ]
})
export class Stub420Module {

}
