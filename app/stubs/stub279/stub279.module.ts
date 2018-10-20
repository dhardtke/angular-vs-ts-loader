import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub279Component} from "./stub279.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub279Component
        }])
    ],
    declarations: [
        Stub279Component
    ]
})
export class Stub279Module {

}
