import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub817Component} from "./stub817.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub817Component
        }])
    ],
    declarations: [
        Stub817Component
    ]
})
export class Stub817Module {

}
