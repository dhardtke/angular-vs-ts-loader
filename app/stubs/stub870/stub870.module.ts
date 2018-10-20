import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub870Component} from "./stub870.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub870Component
        }])
    ],
    declarations: [
        Stub870Component
    ]
})
export class Stub870Module {

}
