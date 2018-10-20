import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub798Component} from "./stub798.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub798Component
        }])
    ],
    declarations: [
        Stub798Component
    ]
})
export class Stub798Module {

}
