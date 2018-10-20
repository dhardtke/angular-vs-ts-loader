import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub380Component} from "./stub380.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub380Component
        }])
    ],
    declarations: [
        Stub380Component
    ]
})
export class Stub380Module {

}
