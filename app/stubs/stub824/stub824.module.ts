import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub824Component} from "./stub824.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub824Component
        }])
    ],
    declarations: [
        Stub824Component
    ]
})
export class Stub824Module {

}
