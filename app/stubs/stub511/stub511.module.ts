import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub511Component} from "./stub511.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub511Component
        }])
    ],
    declarations: [
        Stub511Component
    ]
})
export class Stub511Module {

}
