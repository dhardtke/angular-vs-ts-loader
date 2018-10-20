import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub778Component} from "./stub778.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub778Component
        }])
    ],
    declarations: [
        Stub778Component
    ]
})
export class Stub778Module {

}
