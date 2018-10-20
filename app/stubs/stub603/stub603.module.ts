import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub603Component} from "./stub603.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub603Component
        }])
    ],
    declarations: [
        Stub603Component
    ]
})
export class Stub603Module {

}
