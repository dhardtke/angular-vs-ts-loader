import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub20Component} from "./stub20.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub20Component
        }])
    ],
    declarations: [
        Stub20Component
    ]
})
export class Stub20Module {

}
