import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub116Component} from "./stub116.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub116Component
        }])
    ],
    declarations: [
        Stub116Component
    ]
})
export class Stub116Module {

}
