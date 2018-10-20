import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub302Component} from "./stub302.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub302Component
        }])
    ],
    declarations: [
        Stub302Component
    ]
})
export class Stub302Module {

}
