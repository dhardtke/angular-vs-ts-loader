import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub688Component} from "./stub688.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub688Component
        }])
    ],
    declarations: [
        Stub688Component
    ]
})
export class Stub688Module {

}
