import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub9Component} from "./stub9.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub9Component
        }])
    ],
    declarations: [
        Stub9Component
    ]
})
export class Stub9Module {

}
