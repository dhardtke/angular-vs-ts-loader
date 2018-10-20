import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub482Component} from "./stub482.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub482Component
        }])
    ],
    declarations: [
        Stub482Component
    ]
})
export class Stub482Module {

}
