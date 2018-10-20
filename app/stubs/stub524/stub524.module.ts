import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub524Component} from "./stub524.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub524Component
        }])
    ],
    declarations: [
        Stub524Component
    ]
})
export class Stub524Module {

}
