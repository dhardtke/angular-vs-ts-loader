import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub148Component} from "./stub148.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub148Component
        }])
    ],
    declarations: [
        Stub148Component
    ]
})
export class Stub148Module {

}
