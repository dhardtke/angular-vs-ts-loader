import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub840Component} from "./stub840.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub840Component
        }])
    ],
    declarations: [
        Stub840Component
    ]
})
export class Stub840Module {

}
