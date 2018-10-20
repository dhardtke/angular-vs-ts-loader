import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub950Component} from "./stub950.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub950Component
        }])
    ],
    declarations: [
        Stub950Component
    ]
})
export class Stub950Module {

}
