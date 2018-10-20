import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub626Component} from "./stub626.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub626Component
        }])
    ],
    declarations: [
        Stub626Component
    ]
})
export class Stub626Module {

}
