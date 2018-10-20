import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub57Component} from "./stub57.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub57Component
        }])
    ],
    declarations: [
        Stub57Component
    ]
})
export class Stub57Module {

}
