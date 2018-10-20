import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub483Component} from "./stub483.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub483Component
        }])
    ],
    declarations: [
        Stub483Component
    ]
})
export class Stub483Module {

}
