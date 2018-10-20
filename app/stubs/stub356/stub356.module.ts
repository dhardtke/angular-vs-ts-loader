import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub356Component} from "./stub356.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub356Component
        }])
    ],
    declarations: [
        Stub356Component
    ]
})
export class Stub356Module {

}
