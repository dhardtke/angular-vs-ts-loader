import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub658Component} from "./stub658.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub658Component
        }])
    ],
    declarations: [
        Stub658Component
    ]
})
export class Stub658Module {

}
