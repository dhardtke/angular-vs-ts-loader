import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub53Component} from "./stub53.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub53Component
        }])
    ],
    declarations: [
        Stub53Component
    ]
})
export class Stub53Module {

}
