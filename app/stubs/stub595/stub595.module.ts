import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub595Component} from "./stub595.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub595Component
        }])
    ],
    declarations: [
        Stub595Component
    ]
})
export class Stub595Module {

}
