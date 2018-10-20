import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub323Component} from "./stub323.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub323Component
        }])
    ],
    declarations: [
        Stub323Component
    ]
})
export class Stub323Module {

}
