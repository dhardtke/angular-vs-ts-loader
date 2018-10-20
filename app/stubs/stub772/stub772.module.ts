import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub772Component} from "./stub772.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub772Component
        }])
    ],
    declarations: [
        Stub772Component
    ]
})
export class Stub772Module {

}
