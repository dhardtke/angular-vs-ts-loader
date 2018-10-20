import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub467Component} from "./stub467.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub467Component
        }])
    ],
    declarations: [
        Stub467Component
    ]
})
export class Stub467Module {

}
