import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub40Component} from "./stub40.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub40Component
        }])
    ],
    declarations: [
        Stub40Component
    ]
})
export class Stub40Module {

}
