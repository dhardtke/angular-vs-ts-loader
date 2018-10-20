import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub354Component} from "./stub354.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub354Component
        }])
    ],
    declarations: [
        Stub354Component
    ]
})
export class Stub354Module {

}
