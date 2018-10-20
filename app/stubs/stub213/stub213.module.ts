import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub213Component} from "./stub213.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub213Component
        }])
    ],
    declarations: [
        Stub213Component
    ]
})
export class Stub213Module {

}
