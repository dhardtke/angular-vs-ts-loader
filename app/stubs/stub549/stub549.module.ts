import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub549Component} from "./stub549.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub549Component
        }])
    ],
    declarations: [
        Stub549Component
    ]
})
export class Stub549Module {

}
