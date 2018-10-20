import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub11Component} from "./stub11.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub11Component
        }])
    ],
    declarations: [
        Stub11Component
    ]
})
export class Stub11Module {

}
