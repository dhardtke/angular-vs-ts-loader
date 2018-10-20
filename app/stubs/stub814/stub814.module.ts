import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub814Component} from "./stub814.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub814Component
        }])
    ],
    declarations: [
        Stub814Component
    ]
})
export class Stub814Module {

}
