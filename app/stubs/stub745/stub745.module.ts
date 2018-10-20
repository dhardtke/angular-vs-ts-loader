import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub745Component} from "./stub745.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub745Component
        }])
    ],
    declarations: [
        Stub745Component
    ]
})
export class Stub745Module {

}
