import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub675Component} from "./stub675.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub675Component
        }])
    ],
    declarations: [
        Stub675Component
    ]
})
export class Stub675Module {

}
