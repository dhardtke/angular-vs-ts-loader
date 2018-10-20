import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub314Component} from "./stub314.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub314Component
        }])
    ],
    declarations: [
        Stub314Component
    ]
})
export class Stub314Module {

}
