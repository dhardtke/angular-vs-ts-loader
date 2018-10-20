import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub211Component} from "./stub211.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub211Component
        }])
    ],
    declarations: [
        Stub211Component
    ]
})
export class Stub211Module {

}
