import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub645Component} from "./stub645.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub645Component
        }])
    ],
    declarations: [
        Stub645Component
    ]
})
export class Stub645Module {

}
