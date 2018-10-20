import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub868Component} from "./stub868.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub868Component
        }])
    ],
    declarations: [
        Stub868Component
    ]
})
export class Stub868Module {

}
