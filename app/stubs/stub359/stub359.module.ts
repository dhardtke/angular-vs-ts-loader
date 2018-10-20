import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub359Component} from "./stub359.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub359Component
        }])
    ],
    declarations: [
        Stub359Component
    ]
})
export class Stub359Module {

}
