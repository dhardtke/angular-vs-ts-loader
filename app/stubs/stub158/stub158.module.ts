import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub158Component} from "./stub158.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub158Component
        }])
    ],
    declarations: [
        Stub158Component
    ]
})
export class Stub158Module {

}
