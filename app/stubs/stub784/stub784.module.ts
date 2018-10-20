import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub784Component} from "./stub784.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub784Component
        }])
    ],
    declarations: [
        Stub784Component
    ]
})
export class Stub784Module {

}
