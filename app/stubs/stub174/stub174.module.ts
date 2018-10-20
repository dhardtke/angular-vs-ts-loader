import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub174Component} from "./stub174.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub174Component
        }])
    ],
    declarations: [
        Stub174Component
    ]
})
export class Stub174Module {

}
