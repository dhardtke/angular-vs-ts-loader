import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub570Component} from "./stub570.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub570Component
        }])
    ],
    declarations: [
        Stub570Component
    ]
})
export class Stub570Module {

}
