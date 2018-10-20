import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub82Component} from "./stub82.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub82Component
        }])
    ],
    declarations: [
        Stub82Component
    ]
})
export class Stub82Module {

}
