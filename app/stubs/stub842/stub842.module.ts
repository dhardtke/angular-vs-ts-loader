import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub842Component} from "./stub842.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub842Component
        }])
    ],
    declarations: [
        Stub842Component
    ]
})
export class Stub842Module {

}
