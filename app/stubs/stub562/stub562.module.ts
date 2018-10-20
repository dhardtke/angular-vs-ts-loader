import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub562Component} from "./stub562.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub562Component
        }])
    ],
    declarations: [
        Stub562Component
    ]
})
export class Stub562Module {

}
