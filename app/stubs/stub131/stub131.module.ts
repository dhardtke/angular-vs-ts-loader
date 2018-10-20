import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub131Component} from "./stub131.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub131Component
        }])
    ],
    declarations: [
        Stub131Component
    ]
})
export class Stub131Module {

}
