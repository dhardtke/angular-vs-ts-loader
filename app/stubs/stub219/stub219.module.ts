import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub219Component} from "./stub219.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub219Component
        }])
    ],
    declarations: [
        Stub219Component
    ]
})
export class Stub219Module {

}
