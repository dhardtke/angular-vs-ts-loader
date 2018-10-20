import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub500Component} from "./stub500.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub500Component
        }])
    ],
    declarations: [
        Stub500Component
    ]
})
export class Stub500Module {

}
