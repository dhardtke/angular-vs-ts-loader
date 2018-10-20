import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub920Component} from "./stub920.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub920Component
        }])
    ],
    declarations: [
        Stub920Component
    ]
})
export class Stub920Module {

}
