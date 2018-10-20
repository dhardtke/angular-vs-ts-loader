import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub34Component} from "./stub34.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub34Component
        }])
    ],
    declarations: [
        Stub34Component
    ]
})
export class Stub34Module {

}
