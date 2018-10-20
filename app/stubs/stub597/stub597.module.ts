import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub597Component} from "./stub597.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub597Component
        }])
    ],
    declarations: [
        Stub597Component
    ]
})
export class Stub597Module {

}
