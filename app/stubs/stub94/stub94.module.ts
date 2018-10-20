import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub94Component} from "./stub94.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub94Component
        }])
    ],
    declarations: [
        Stub94Component
    ]
})
export class Stub94Module {

}
