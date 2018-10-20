import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub347Component} from "./stub347.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub347Component
        }])
    ],
    declarations: [
        Stub347Component
    ]
})
export class Stub347Module {

}
