import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub184Component} from "./stub184.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub184Component
        }])
    ],
    declarations: [
        Stub184Component
    ]
})
export class Stub184Module {

}
