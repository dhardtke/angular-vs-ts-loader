import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub788Component} from "./stub788.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub788Component
        }])
    ],
    declarations: [
        Stub788Component
    ]
})
export class Stub788Module {

}
