import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub496Component} from "./stub496.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub496Component
        }])
    ],
    declarations: [
        Stub496Component
    ]
})
export class Stub496Module {

}
