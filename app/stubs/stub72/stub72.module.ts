import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub72Component} from "./stub72.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub72Component
        }])
    ],
    declarations: [
        Stub72Component
    ]
})
export class Stub72Module {

}
