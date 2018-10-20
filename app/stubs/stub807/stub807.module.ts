import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub807Component} from "./stub807.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub807Component
        }])
    ],
    declarations: [
        Stub807Component
    ]
})
export class Stub807Module {

}
