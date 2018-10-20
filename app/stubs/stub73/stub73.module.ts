import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub73Component} from "./stub73.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub73Component
        }])
    ],
    declarations: [
        Stub73Component
    ]
})
export class Stub73Module {

}
