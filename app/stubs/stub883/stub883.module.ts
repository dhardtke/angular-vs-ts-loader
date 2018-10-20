import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub883Component} from "./stub883.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub883Component
        }])
    ],
    declarations: [
        Stub883Component
    ]
})
export class Stub883Module {

}
