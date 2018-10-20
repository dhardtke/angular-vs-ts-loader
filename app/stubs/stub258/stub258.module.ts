import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub258Component} from "./stub258.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub258Component
        }])
    ],
    declarations: [
        Stub258Component
    ]
})
export class Stub258Module {

}
