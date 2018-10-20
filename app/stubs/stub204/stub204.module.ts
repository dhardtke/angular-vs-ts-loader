import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub204Component} from "./stub204.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub204Component
        }])
    ],
    declarations: [
        Stub204Component
    ]
})
export class Stub204Module {

}
