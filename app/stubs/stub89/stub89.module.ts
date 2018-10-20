import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub89Component} from "./stub89.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub89Component
        }])
    ],
    declarations: [
        Stub89Component
    ]
})
export class Stub89Module {

}
