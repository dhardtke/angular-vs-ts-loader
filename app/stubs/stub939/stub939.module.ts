import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub939Component} from "./stub939.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub939Component
        }])
    ],
    declarations: [
        Stub939Component
    ]
})
export class Stub939Module {

}
