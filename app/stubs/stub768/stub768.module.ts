import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub768Component} from "./stub768.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub768Component
        }])
    ],
    declarations: [
        Stub768Component
    ]
})
export class Stub768Module {

}
