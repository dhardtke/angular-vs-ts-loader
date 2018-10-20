import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub167Component} from "./stub167.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub167Component
        }])
    ],
    declarations: [
        Stub167Component
    ]
})
export class Stub167Module {

}
