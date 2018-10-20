import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub169Component} from "./stub169.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub169Component
        }])
    ],
    declarations: [
        Stub169Component
    ]
})
export class Stub169Module {

}
