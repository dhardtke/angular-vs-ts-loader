import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub670Component} from "./stub670.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub670Component
        }])
    ],
    declarations: [
        Stub670Component
    ]
})
export class Stub670Module {

}
