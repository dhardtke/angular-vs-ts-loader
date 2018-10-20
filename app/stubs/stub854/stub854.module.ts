import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub854Component} from "./stub854.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub854Component
        }])
    ],
    declarations: [
        Stub854Component
    ]
})
export class Stub854Module {

}
