import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub297Component} from "./stub297.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub297Component
        }])
    ],
    declarations: [
        Stub297Component
    ]
})
export class Stub297Module {

}
