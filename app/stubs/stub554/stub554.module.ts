import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub554Component} from "./stub554.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub554Component
        }])
    ],
    declarations: [
        Stub554Component
    ]
})
export class Stub554Module {

}
