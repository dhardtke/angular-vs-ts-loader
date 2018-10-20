import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub282Component} from "./stub282.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub282Component
        }])
    ],
    declarations: [
        Stub282Component
    ]
})
export class Stub282Module {

}
