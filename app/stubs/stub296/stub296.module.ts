import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub296Component} from "./stub296.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub296Component
        }])
    ],
    declarations: [
        Stub296Component
    ]
})
export class Stub296Module {

}
