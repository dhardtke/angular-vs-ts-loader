import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub113Component} from "./stub113.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub113Component
        }])
    ],
    declarations: [
        Stub113Component
    ]
})
export class Stub113Module {

}
