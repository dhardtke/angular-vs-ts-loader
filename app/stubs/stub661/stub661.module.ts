import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub661Component} from "./stub661.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub661Component
        }])
    ],
    declarations: [
        Stub661Component
    ]
})
export class Stub661Module {

}
