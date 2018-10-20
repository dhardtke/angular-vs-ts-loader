import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub775Component} from "./stub775.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub775Component
        }])
    ],
    declarations: [
        Stub775Component
    ]
})
export class Stub775Module {

}
