import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub993Component} from "./stub993.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub993Component
        }])
    ],
    declarations: [
        Stub993Component
    ]
})
export class Stub993Module {

}
