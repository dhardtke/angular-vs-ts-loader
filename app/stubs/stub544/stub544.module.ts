import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub544Component} from "./stub544.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub544Component
        }])
    ],
    declarations: [
        Stub544Component
    ]
})
export class Stub544Module {

}
