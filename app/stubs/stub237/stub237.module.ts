import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub237Component} from "./stub237.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub237Component
        }])
    ],
    declarations: [
        Stub237Component
    ]
})
export class Stub237Module {

}
