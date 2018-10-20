import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub751Component} from "./stub751.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub751Component
        }])
    ],
    declarations: [
        Stub751Component
    ]
})
export class Stub751Module {

}
