import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub255Component} from "./stub255.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub255Component
        }])
    ],
    declarations: [
        Stub255Component
    ]
})
export class Stub255Module {

}
