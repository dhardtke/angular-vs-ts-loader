import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub14Component} from "./stub14.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub14Component
        }])
    ],
    declarations: [
        Stub14Component
    ]
})
export class Stub14Module {

}
