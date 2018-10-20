import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub242Component} from "./stub242.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub242Component
        }])
    ],
    declarations: [
        Stub242Component
    ]
})
export class Stub242Module {

}
