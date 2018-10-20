import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub304Component} from "./stub304.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub304Component
        }])
    ],
    declarations: [
        Stub304Component
    ]
})
export class Stub304Module {

}
