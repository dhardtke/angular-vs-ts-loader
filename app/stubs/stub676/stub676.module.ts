import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub676Component} from "./stub676.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub676Component
        }])
    ],
    declarations: [
        Stub676Component
    ]
})
export class Stub676Module {

}
