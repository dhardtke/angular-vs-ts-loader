import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub668Component} from "./stub668.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub668Component
        }])
    ],
    declarations: [
        Stub668Component
    ]
})
export class Stub668Module {

}
