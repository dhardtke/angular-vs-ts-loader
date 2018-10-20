import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub957Component} from "./stub957.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub957Component
        }])
    ],
    declarations: [
        Stub957Component
    ]
})
export class Stub957Module {

}
