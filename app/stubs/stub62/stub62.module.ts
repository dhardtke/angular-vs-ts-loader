import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub62Component} from "./stub62.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub62Component
        }])
    ],
    declarations: [
        Stub62Component
    ]
})
export class Stub62Module {

}
