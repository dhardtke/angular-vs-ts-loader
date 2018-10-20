import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub988Component} from "./stub988.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub988Component
        }])
    ],
    declarations: [
        Stub988Component
    ]
})
export class Stub988Module {

}
