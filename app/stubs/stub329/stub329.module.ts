import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub329Component} from "./stub329.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub329Component
        }])
    ],
    declarations: [
        Stub329Component
    ]
})
export class Stub329Module {

}
