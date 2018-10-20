import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub192Component} from "./stub192.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub192Component
        }])
    ],
    declarations: [
        Stub192Component
    ]
})
export class Stub192Module {

}
