import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub132Component} from "./stub132.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub132Component
        }])
    ],
    declarations: [
        Stub132Component
    ]
})
export class Stub132Module {

}
