import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub214Component} from "./stub214.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub214Component
        }])
    ],
    declarations: [
        Stub214Component
    ]
})
export class Stub214Module {

}
