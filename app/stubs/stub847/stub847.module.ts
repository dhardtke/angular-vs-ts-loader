import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub847Component} from "./stub847.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub847Component
        }])
    ],
    declarations: [
        Stub847Component
    ]
})
export class Stub847Module {

}
