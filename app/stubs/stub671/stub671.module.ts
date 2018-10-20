import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub671Component} from "./stub671.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub671Component
        }])
    ],
    declarations: [
        Stub671Component
    ]
})
export class Stub671Module {

}
