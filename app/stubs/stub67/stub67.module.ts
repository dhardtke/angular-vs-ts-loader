import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub67Component} from "./stub67.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub67Component
        }])
    ],
    declarations: [
        Stub67Component
    ]
})
export class Stub67Module {

}
