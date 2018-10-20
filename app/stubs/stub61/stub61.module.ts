import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub61Component} from "./stub61.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub61Component
        }])
    ],
    declarations: [
        Stub61Component
    ]
})
export class Stub61Module {

}
