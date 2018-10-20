import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub245Component} from "./stub245.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub245Component
        }])
    ],
    declarations: [
        Stub245Component
    ]
})
export class Stub245Module {

}
