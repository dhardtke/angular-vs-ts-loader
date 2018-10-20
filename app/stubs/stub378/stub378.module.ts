import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub378Component} from "./stub378.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub378Component
        }])
    ],
    declarations: [
        Stub378Component
    ]
})
export class Stub378Module {

}
