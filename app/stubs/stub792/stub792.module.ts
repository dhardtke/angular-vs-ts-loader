import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub792Component} from "./stub792.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub792Component
        }])
    ],
    declarations: [
        Stub792Component
    ]
})
export class Stub792Module {

}
