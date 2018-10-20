import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub924Component} from "./stub924.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub924Component
        }])
    ],
    declarations: [
        Stub924Component
    ]
})
export class Stub924Module {

}
