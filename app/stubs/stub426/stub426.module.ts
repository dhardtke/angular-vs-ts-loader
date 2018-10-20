import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub426Component} from "./stub426.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub426Component
        }])
    ],
    declarations: [
        Stub426Component
    ]
})
export class Stub426Module {

}
