import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub430Component} from "./stub430.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub430Component
        }])
    ],
    declarations: [
        Stub430Component
    ]
})
export class Stub430Module {

}
