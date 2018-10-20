import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub905Component} from "./stub905.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub905Component
        }])
    ],
    declarations: [
        Stub905Component
    ]
})
export class Stub905Module {

}
