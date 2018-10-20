import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub379Component} from "./stub379.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub379Component
        }])
    ],
    declarations: [
        Stub379Component
    ]
})
export class Stub379Module {

}
