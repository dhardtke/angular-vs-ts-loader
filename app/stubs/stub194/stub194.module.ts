import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub194Component} from "./stub194.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub194Component
        }])
    ],
    declarations: [
        Stub194Component
    ]
})
export class Stub194Module {

}
