import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub326Component} from "./stub326.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub326Component
        }])
    ],
    declarations: [
        Stub326Component
    ]
})
export class Stub326Module {

}
