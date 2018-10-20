import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub74Component} from "./stub74.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub74Component
        }])
    ],
    declarations: [
        Stub74Component
    ]
})
export class Stub74Module {

}
