import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub945Component} from "./stub945.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub945Component
        }])
    ],
    declarations: [
        Stub945Component
    ]
})
export class Stub945Module {

}
