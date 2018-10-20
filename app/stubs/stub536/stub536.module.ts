import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub536Component} from "./stub536.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub536Component
        }])
    ],
    declarations: [
        Stub536Component
    ]
})
export class Stub536Module {

}
