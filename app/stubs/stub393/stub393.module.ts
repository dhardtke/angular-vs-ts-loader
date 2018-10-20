import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub393Component} from "./stub393.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub393Component
        }])
    ],
    declarations: [
        Stub393Component
    ]
})
export class Stub393Module {

}
