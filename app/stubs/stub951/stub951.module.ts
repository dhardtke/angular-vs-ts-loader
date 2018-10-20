import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub951Component} from "./stub951.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub951Component
        }])
    ],
    declarations: [
        Stub951Component
    ]
})
export class Stub951Module {

}
