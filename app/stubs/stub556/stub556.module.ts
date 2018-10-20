import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub556Component} from "./stub556.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub556Component
        }])
    ],
    declarations: [
        Stub556Component
    ]
})
export class Stub556Module {

}
