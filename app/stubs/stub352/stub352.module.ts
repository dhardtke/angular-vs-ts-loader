import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub352Component} from "./stub352.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub352Component
        }])
    ],
    declarations: [
        Stub352Component
    ]
})
export class Stub352Module {

}
