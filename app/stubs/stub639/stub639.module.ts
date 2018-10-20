import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub639Component} from "./stub639.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub639Component
        }])
    ],
    declarations: [
        Stub639Component
    ]
})
export class Stub639Module {

}
