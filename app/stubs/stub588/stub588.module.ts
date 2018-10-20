import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub588Component} from "./stub588.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub588Component
        }])
    ],
    declarations: [
        Stub588Component
    ]
})
export class Stub588Module {

}
