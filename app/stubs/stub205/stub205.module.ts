import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub205Component} from "./stub205.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub205Component
        }])
    ],
    declarations: [
        Stub205Component
    ]
})
export class Stub205Module {

}
