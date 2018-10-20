import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub697Component} from "./stub697.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub697Component
        }])
    ],
    declarations: [
        Stub697Component
    ]
})
export class Stub697Module {

}
