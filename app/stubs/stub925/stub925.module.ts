import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub925Component} from "./stub925.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub925Component
        }])
    ],
    declarations: [
        Stub925Component
    ]
})
export class Stub925Module {

}
