import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub332Component} from "./stub332.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub332Component
        }])
    ],
    declarations: [
        Stub332Component
    ]
})
export class Stub332Module {

}
