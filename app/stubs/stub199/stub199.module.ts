import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub199Component} from "./stub199.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub199Component
        }])
    ],
    declarations: [
        Stub199Component
    ]
})
export class Stub199Module {

}
