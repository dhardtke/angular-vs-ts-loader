import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub865Component} from "./stub865.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub865Component
        }])
    ],
    declarations: [
        Stub865Component
    ]
})
export class Stub865Module {

}
