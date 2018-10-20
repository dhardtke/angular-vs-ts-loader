import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub590Component} from "./stub590.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub590Component
        }])
    ],
    declarations: [
        Stub590Component
    ]
})
export class Stub590Module {

}
