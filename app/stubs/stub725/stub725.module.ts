import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub725Component} from "./stub725.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub725Component
        }])
    ],
    declarations: [
        Stub725Component
    ]
})
export class Stub725Module {

}
