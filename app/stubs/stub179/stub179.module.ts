import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub179Component} from "./stub179.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub179Component
        }])
    ],
    declarations: [
        Stub179Component
    ]
})
export class Stub179Module {

}
