import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub598Component} from "./stub598.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub598Component
        }])
    ],
    declarations: [
        Stub598Component
    ]
})
export class Stub598Module {

}
