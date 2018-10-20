import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub229Component} from "./stub229.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub229Component
        }])
    ],
    declarations: [
        Stub229Component
    ]
})
export class Stub229Module {

}
