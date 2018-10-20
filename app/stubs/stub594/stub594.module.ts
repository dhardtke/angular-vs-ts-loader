import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub594Component} from "./stub594.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub594Component
        }])
    ],
    declarations: [
        Stub594Component
    ]
})
export class Stub594Module {

}
