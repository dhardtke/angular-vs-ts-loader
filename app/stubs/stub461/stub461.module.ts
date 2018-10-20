import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub461Component} from "./stub461.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub461Component
        }])
    ],
    declarations: [
        Stub461Component
    ]
})
export class Stub461Module {

}
