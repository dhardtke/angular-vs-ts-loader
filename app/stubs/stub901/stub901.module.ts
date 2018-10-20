import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub901Component} from "./stub901.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub901Component
        }])
    ],
    declarations: [
        Stub901Component
    ]
})
export class Stub901Module {

}
