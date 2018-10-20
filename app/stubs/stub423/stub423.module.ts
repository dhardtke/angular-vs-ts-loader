import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub423Component} from "./stub423.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub423Component
        }])
    ],
    declarations: [
        Stub423Component
    ]
})
export class Stub423Module {

}
