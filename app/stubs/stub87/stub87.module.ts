import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub87Component} from "./stub87.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub87Component
        }])
    ],
    declarations: [
        Stub87Component
    ]
})
export class Stub87Module {

}
