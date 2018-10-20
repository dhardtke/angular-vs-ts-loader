import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub994Component} from "./stub994.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub994Component
        }])
    ],
    declarations: [
        Stub994Component
    ]
})
export class Stub994Module {

}
