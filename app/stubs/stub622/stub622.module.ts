import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub622Component} from "./stub622.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub622Component
        }])
    ],
    declarations: [
        Stub622Component
    ]
})
export class Stub622Module {

}
