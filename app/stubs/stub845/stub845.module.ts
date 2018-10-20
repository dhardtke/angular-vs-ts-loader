import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub845Component} from "./stub845.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub845Component
        }])
    ],
    declarations: [
        Stub845Component
    ]
})
export class Stub845Module {

}
