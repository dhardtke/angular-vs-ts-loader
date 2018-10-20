import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub953Component} from "./stub953.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub953Component
        }])
    ],
    declarations: [
        Stub953Component
    ]
})
export class Stub953Module {

}
