import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub91Component} from "./stub91.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub91Component
        }])
    ],
    declarations: [
        Stub91Component
    ]
})
export class Stub91Module {

}
