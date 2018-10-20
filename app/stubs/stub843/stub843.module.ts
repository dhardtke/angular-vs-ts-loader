import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub843Component} from "./stub843.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub843Component
        }])
    ],
    declarations: [
        Stub843Component
    ]
})
export class Stub843Module {

}
