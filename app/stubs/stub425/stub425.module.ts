import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub425Component} from "./stub425.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub425Component
        }])
    ],
    declarations: [
        Stub425Component
    ]
})
export class Stub425Module {

}
